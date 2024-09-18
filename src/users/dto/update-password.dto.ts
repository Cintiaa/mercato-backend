import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDto } from "./create-user.dto";
import { IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UpdatePasswordDto extends PartialType(CreateUserDto) {
  @IsNotEmpty()
  @ApiProperty()
  password!: string;

  @IsNotEmpty()
  @ApiProperty()
  confirmPassword!: string;

  updatedatPassword?: Date | null;
}
