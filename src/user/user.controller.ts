import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsersService } from "./user.service";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  async createUser(@Body("name") name: string, @Body("email") email: string) {
    return this.userService.createUser(name, email);
  }

  @Get()
  async getUsers() {
    return this.userService.getUsers();
  }
}
