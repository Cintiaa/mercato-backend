import {
  BadRequestException,
  ConflictException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";

import { User } from "./entities/user.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserDto } from "./dto/user.dto";
import { FindUserDto } from "./dto/find-user.dto";
import { UpdatePasswordDto } from "./dto/update-password.dto";
import { LoginUserDto } from "./dto/login-user.dto";
import { TransformUtil } from "../common/utils/transform.util";
import { HashUtil } from "../common/utils/hash.util";
import { UsersRepository } from "./users.repository";
import { UpdateResult } from "typeorm";

@Injectable()
export class UsersService {
  constructor(
    private readonly UsersRepository: UsersRepository,
    private readonly transformUtil: TransformUtil,
    private readonly hashUtil: HashUtil
  ) {}

  async create(createUserDto: CreateUserDto): Promise<UserDto> {
    const createUser = new User();

    const { name, surname, email, password } = createUserDto;

    const user = await this.findByEmail(email);

    if (user) {
      throw new ConflictException("User already exist");
    }

    const hashPassword = await this.hashUtil.hashPassword(password);

    const newUser = await this.UsersRepository.create({
      ...createUser,
      name,
      surname,
      email,
      password: hashPassword,
    });

    return this.transformUtil.toUserDto(newUser);
  }

  async findAll(): Promise<FindUserDto[]> {
    const user = await this.UsersRepository.findAll();
    return user.map((u) => {
      return this.transformUtil.toUserFindDto(u);
    });
  }

  async findOne(id: number): Promise<FindUserDto | null> {
    const user = await this.UsersRepository.findById(id);

    if (!user) {
      return null;
    }

    return this.transformUtil.toUserFindDto(user);
  }

  async updatePassword(
    id: number,
    updatePasswordDto: UpdatePasswordDto
  ): Promise<UpdateResult> {
    const { password, confirmPassword } = updatePasswordDto;
    const isEmpy = !password || !confirmPassword;
    const isInvalid = password !== confirmPassword;

    if (isEmpy || isInvalid) {
      throw new BadRequestException("Invalid password");
    }

    const user = new User();

    const hashPassword = await this.hashUtil.hashPassword(password);

    user.password = hashPassword;
    user.updatedatPassword = new Date();

    return this.UsersRepository.updatePassword(id, user);
  }

  async findByUserLogin({
    email,
    password,
  }: LoginUserDto): Promise<UserDto | null> {
    const user = await this.findByUserActive(email);

    const isPasswordValid = await this.hashUtil.verifyPassword(
      user.password,
      password
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException("Invalid credentials");
    }

    return this.transformUtil.toUserDto(user);
  }

  async findByUserActive(email: string) {
    const user = await this.findByEmail(email);

    if (!user || !user.isActive) {
      throw new UnauthorizedException("Invalid credentials");
    }

    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.UsersRepository.findByEmail(email);
  }

  async updateAccess(id: number) {
    await this.UsersRepository.updateLoginAccess(id);
  }

  async findUserById(id: number) {
    const user = await this.UsersRepository.findById(id);

    if (!user) {
      throw new BadRequestException("User not found");
    }

    return user;
  }
}
