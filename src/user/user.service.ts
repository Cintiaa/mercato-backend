import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { User } from "./entities/user.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserDto } from "./dto/user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { FindUserDto } from "./dto/find-user.dto";
import { TransformUtil } from "../common/utils/transform.util";
import { HashUtil } from "../common/utils/hash.util";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly transformUtil: TransformUtil,
    private readonly hashUtil: HashUtil
  ) {}

  async create(createUserDto: CreateUserDto): Promise<UserDto> {
    const { email, password } = createUserDto;

    const hashPassword = await this.hashUtil.hashPassword(password);

    const user = this.userRepository.create({ email, password: hashPassword });
    const userCreate = await this.userRepository.save(user);

    return this.transformUtil.toUserDto(userCreate);
  }

  async findAll(): Promise<FindUserDto[]> {
    const user = await this.userRepository.find();
    return user.map((u) => {
      return this.transformUtil.toUserFindDto(u);
    });
  }

  async findOne(id: number): Promise<FindUserDto | null> {
    const user = await this.userRepository.findOne({ where: { id } });

    if (!user) {
      return null;
    }

    return this.transformUtil.toUserFindDto(user);
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { email } });
  }

  async updatePassword(
    id: number,
    updateUserDto: UpdateUserDto
  ): Promise<UserDto> {
    const { password, confirmPassword } = updateUserDto;
    const isEmpy = !password || !confirmPassword;
    const isInvalid = password !== confirmPassword;

    if (isEmpy || isInvalid) {
      throw new BadRequestException("Invalid credentials");
    }

    const user = await this.userRepository.findOne({ where: { id } });

    if (!user) {
      throw new BadRequestException("Invalid credentials");
    }
    const hashPassword = await this.hashUtil.hashPassword(password);

    user.password = hashPassword;
    user.updatedatPassword = new Date();
    const userCreate = await this.userRepository.save(user);

    return this.transformUtil.toUserDto(userCreate);
  }
}
