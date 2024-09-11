import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { TransformUtil } from '../common/utils/transform.util';
import { HashUtil } from '../common/utils/hash.util';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService, TransformUtil, HashUtil],
  controllers: [UserController],
  exports: [UserService]
})
export class UserModule {}
