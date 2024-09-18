import { PassportStrategy } from "@nestjs/passport";
import { AuthService } from "../auth.service";
import { ExtractJwt, Strategy } from "passport-jwt";
import { JwtPayloadDto } from "../dto/jwt-payload.dto";
import { UserDto } from "../../users/dto/user.dto";
import { Injectable, UnauthorizedException } from "@nestjs/common";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: Bun.env["JWT_SECRET"],
    });
  }

  async validate(payload: JwtPayloadDto): Promise<UserDto> {
    const user = await this.authService.validateUser(payload);

    if(!user) {
      throw new UnauthorizedException("Invalid token");
    }

    return user;
  }
}
