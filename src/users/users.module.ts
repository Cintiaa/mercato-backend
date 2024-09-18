import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { User } from "./entities/user.entity";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { TransformUtil } from "../common/utils/transform.util";
import { HashUtil } from "../common/utils/hash.util";
import { UsersRepository } from "./users.repository";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService, UsersRepository, TransformUtil, HashUtil],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
