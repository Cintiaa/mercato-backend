import { Injectable } from "@nestjs/common";
import { User } from "../../users/entities/user.entity";
import { UserDto } from "../../users/dto/user.dto";
import { FindUserDto } from "../../users/dto/find-user.dto";

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
      name: user.name,
      surname: user.surname,
      email: user.email,
      isActive: user.isActive,
      lastAccess: user.lastAccess,
      updatedatPassword: user.updatedatPassword,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt
    };
  }
}
