import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

import { UsersService } from "../users/users.service";
import { UserDto } from "../users/dto/user.dto";
import { TransformUtil } from "../common/utils/transform.util";
import { JwtPayloadDto } from "./dto/jwt-payload.dto";
import { LoginUserDto } from "../users/dto/login-user.dto";

@Injectable()
export class AuthService {
  constructor(
    private UsersService: UsersService,
    private jwtService: JwtService,
    private transformUtil: TransformUtil
  ) {}

  async validateUser(payload: JwtPayloadDto): Promise<UserDto> {
    const user = await this.UsersService.findByUserActive(payload.email);

    return this.transformUtil.toUserDto(user);
  }

  async login(loginUserDto: LoginUserDto): Promise<{access_token: string}> {
    const user = await this.UsersService.findByUserLogin(loginUserDto);

    if (!user) {
      return { access_token: "" };
    }

    const token = await this.createToken(user);
    await this.UsersService.updateAccess(user.id)

    return {
      access_token: token.Authorization,
    };
  }

  private async createToken(user: UserDto): Promise<any> {
    const payload: JwtPayloadDto = { email: user.email, sub: user.id };
    return {
      Authorization: await this.jwtService.signAsync(payload),
    };
  }
}
