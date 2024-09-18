import { Injectable } from "@nestjs/common";
import { Repository, UpdateResult } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

import { User } from "./entities/user.entity";

@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(User)
    private readonly typeOrmRepo: Repository<User>
  ) {}

  async create(user: User): Promise<User> {
    const newUser = this.typeOrmRepo.create(user);
    return this.typeOrmRepo.save(newUser);
  }

  async updatePassword(id: number, user: User): Promise<UpdateResult> {
    return this.typeOrmRepo.update(id, user);
  }

  async updateLoginAccess(id: number): Promise<UpdateResult> {
    return this.typeOrmRepo.update(id, { lastAccess: new Date() });
  }

  async findAll(): Promise<User[]> {
    return this.typeOrmRepo.find();
  }

  async findById(id: number): Promise<User | null> {
    return this.typeOrmRepo.findOne({ where: { id } });
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.typeOrmRepo.findOne({ where: { email } });
  }
}
