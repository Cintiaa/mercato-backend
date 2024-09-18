import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Req,
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

  @Get()
  async findAll() {
    return this.UsersService.findAll();
  }

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
  @Get("profile")
  getProfile(@Req() req: Request) {
    return req;
  }
}
