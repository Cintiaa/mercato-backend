import { IsEmail, IsNotEmpty } from "class-validator";
import { ILogin } from "../interfaces/login.interface";

export class LoginDto implements ILogin {
  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @IsNotEmpty()
  password!: string;
}
