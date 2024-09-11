import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

import { UserService } from "../user/user.service";
import { UserDto } from "../user/dto/user.dto";
import { HashUtil } from "../common/utils/hash.util";
import { TransformUtil } from "../common/utils/transform.util";
import { JwtPayloadDto } from "./dto/jwt-payload.dto";

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private hashUtil: HashUtil,
    private transformUtil: TransformUtil
  ) {}

  async validateUser(email: string, password: string): Promise<UserDto> {
    const user = await this.userService.findByEmail(email);

    if (!user || !user.isActive) {
      throw new UnauthorizedException("Invalid credentials");
    }

    const isPasswordValid = await this.hashUtil.verifyPassword(
      user.password,
      password
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException("Invalid credentials");
    }

    return this.transformUtil.toUserDto(user);
  }

  async login(user: UserDto) {
    const payload: JwtPayloadDto = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
