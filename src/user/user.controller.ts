import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UsersService } from "./user.service";
import { password } from "bun";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  async create(
    @Body("email") email: string,
    @Body("password") password: string
  ) {
    return this.userService.create(email, password);
  }

  @Get()
  async findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }
}
