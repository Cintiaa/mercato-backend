import { PassportStrategy } from "@nestjs/passport";
import { AuthService } from "../auth.service";
import { ExtractJwt, Strategy } from "passport-jwt";
import { JwtPayloadDto } from "../dto/jwt-payload.dto";
import { UserDto } from "../../user/dto/user.dto";

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: Bun.env["JWT_SECRET"],
    });
  }

  async validate(payload: JwtPayloadDto): Promise<UserDto> {
    return { id: payload.sub, email: payload.email };
  }
}
