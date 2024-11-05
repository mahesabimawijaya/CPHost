import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { Response } from 'express';
import { response } from 'src/utils/response.util';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('v1')
  register(@Body() createUserDto: CreateUserDto) {
    return this.userService.register(createUserDto);
  }

  @Post('v2')
  async login(@Body() loginUserDto: LoginUserDto, @Res() res: Response) {
    return await this.userService.login(loginUserDto, res);
  }
}
