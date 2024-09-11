import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { UserModule } from "../user/user.module";
import { JwtStrategy } from "./strategy/jwt.strategy";
import { TransformUtil } from "../common/utils/transform.util";
import { HashUtil } from "../common/utils/hash.util";

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: Bun.env["JWT_SECRET"],
      signOptions: { expiresIn: "1h" },
    }),
    UserModule,
  ],
  providers: [AuthService, JwtStrategy, TransformUtil, HashUtil],
  controllers: [AuthController],
})
export class AuthModule {}
