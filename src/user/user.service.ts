
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { Request, Response } from 'express';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import jwt from 'jsonwebtoken';
const prisma = new PrismaClient();


@Injectable()
export class UserService {
  /**
   *
   */
  constructor(  private jwtService: JwtService) {
    
    
  }
  async createUser(createUserDto: CreateUserDto , res: Response,req:Request) {
  
  try {
if(createUserDto.password != createUserDto.repeatpassword) throw new Error("password isn't Matching");


const findByemail = await prisma.user.findFirst({where:{email:createUserDto.email}})
if(findByemail) throw new Error("Email is already Registered");
const hashedPassword = await bcrypt.hash(createUserDto.password, 5);
const createuser =  await prisma.user.create({
      data: {
        email: createUserDto.email,
        password: hashedPassword, // storing password in encrypting mode
 address:createUserDto.address,city:createUserDto.city
      },select:{email:true,isAdmin:true}});
      
   const token = await this.jwtService.signAsync(createuser)

res.setHeader(`Authorization`,`Bearer ${token}`)

console.log(req.headers)
   res.status(201).json(`Bearer ${token}`)
} catch (error) {
    res.status(400).json(error.message)
    
  }  
  }
async FindAll(){


return prisma.user.findMany()


}


async Login(req,res){
console.log(req.body)
  const findUser  = await prisma.user.findFirst({where:{email:req.body.email},select:{email:true,password:true}})
  console.log(findUser)

if(!findUser)  throw new HttpException('Check information',HttpStatus.NOT_FOUND)
  const comperor = await bcrypt.compare(req.body.password,findUser.password)

console.log(comperor)
if(!comperor) throw new HttpException('Wrong Password',HttpStatus.NOT_FOUND)
const token = await this.jwtService.signAsync(findUser)
res.setHeader(`Authorization`,`Bearer ${token}`)
res.status(201).json(`Bearer ${token}`)
  
  }
  


async DeleteById(id){
  console.log(id)
const DeleteByID = prisma.user.delete({where:{id}})
return DeleteByID

}




}
