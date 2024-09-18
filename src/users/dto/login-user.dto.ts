import { IsEmail, IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { ILoginUser } from "../interfaces/user-login.interface";

export class LoginUserDto implements ILoginUser {
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  readonly email!: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly password!: string;
}
