import { Body, Controller, Get, Param, Patch, Post, Req, Request, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  async findAll() {
    return this.userService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  updatePassword(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.updatePassword(+id, updateUserDto);
  }

  @UseGuards(JwtAuthGuard) 
  @Get('profile')
  getProfile(@Req() req: Request) {
    return req
  }
}
