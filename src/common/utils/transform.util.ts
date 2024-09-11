import { Injectable } from "@nestjs/common";
import { User } from "../../user/entities/user.entity";
import { UserDto } from "../../user/dto/user.dto";
import { FindUserDto } from "../../user/dto/find-user.dto";

@Injectable()
export class TransformUtil {
  toUserDto(user: User): UserDto {
    return {
      id: user.id,
      email: user.email,
    };
  }

  toUserFindDto(user: User): FindUserDto {
    return {
      id: user.id,
      email: user.email,
      isActive: user.isActive,
      lastAccess: user.lastAccess,
      updatedatPassword: user.updatedatPassword,
    };
  }
}
