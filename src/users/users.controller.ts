import {
  BadRequestException,
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Request,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { ApiSecurity, ApiTags } from "@nestjs/swagger";
import { UpdatePasswordDto } from "./dto/update-password.dto";

@ApiTags("user")
@Controller("user")
export class UsersController {
  constructor(private readonly UsersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.UsersService.create(createUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @ApiSecurity("access-key")
  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  async findAll() {
    return this.UsersService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @ApiSecurity("access-key")
  @UseInterceptors(ClassSerializerInterceptor)
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.UsersService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @ApiSecurity("access-key")
  @UseInterceptors(ClassSerializerInterceptor)
  @Put("update/password")
  async updatePassword(
    @Request() req: any,
    @Body()
    updatePasswordDto: UpdatePasswordDto
  ) {
    return this.UsersService.updatePassword(req.user.id, updatePasswordDto);
  }

  @UseGuards(JwtAuthGuard)
  @ApiSecurity("access-key")
  @UseInterceptors(ClassSerializerInterceptor)
  @Get("profile")
  getProfile(@Request() req: any) {
    return req.user;
  }
}
