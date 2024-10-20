import { Controller, Get, Post, Body, Res,Param ,Req, UseGuards, UsePipes, ValidationPipe, Delete} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Request, Response } from 'express';
import { ApiBearerAuth } from '@nestjs/swagger';

// @UseGuards(AuthGuard)
@UsePipes(new ValidationPipe({transform:true}))
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}



  @Post()
  async create(@Body() createUserDto: CreateUserDto , @Res() res:Response,@Req( ) req:Request) {
    return this.userService.createUser(createUserDto,res,req);
  }






  @Post("/login")
  async Login( @Res() res:Response,@Req( ) req:Request) {
    return this.userService.Login(req,res);
  }








@Get()
async FindAll(){

return this.userService.FindAll()

}



@Delete(":id")
async DeleteByID(@Param('id') id:string){
  console.log(id)
return this.userService.DeleteById(id);

}





}
