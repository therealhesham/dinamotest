import { Controller, Get, Post, Body, Res, Req, UseGuards} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Request, Response } from 'express';
import { AuthGuard } from '../auth/auth/auth.guard';

// @UseGuards(AuthGuard)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}



  @Post()
  async create(@Body() createUserDto: CreateUserDto , @Res() res:Response,@Req( ) req:Request) {
    return this.userService.createUser(createUserDto,res,req);
  }


}
