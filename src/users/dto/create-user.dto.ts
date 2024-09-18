import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty()
  @ApiProperty()
  name!: string;

  @IsNotEmpty()
  @ApiProperty()
  surname!: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  email!: string;

  @IsNotEmpty()
  @MinLength(8)
  @ApiProperty()
  password!: string;

  isActive!: string;

  lastAccess?: Date | null;

  updatePassword?: Date | null;
}
