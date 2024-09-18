import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { UsersModule } from "../users/users.module";
import { JwtStrategy } from "./strategy/jwt.strategy";
import { TransformUtil } from "../common/utils/transform.util";
import { HashUtil } from "../common/utils/hash.util";

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: Bun.env["JWT_SECRET"],
      signOptions: { expiresIn: Bun.env["EXPIRESIN"] },
    }),
    UsersModule,
  ],
  providers: [AuthService, JwtStrategy, TransformUtil, HashUtil],
  controllers: [AuthController],
  exports: [AuthService]
})
export class AuthModule {}
