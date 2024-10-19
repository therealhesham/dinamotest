// src/users/user.service.ts

import { Injectable } from '@nestjs/common';
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
const hashedPassword = await bcrypt.hash(createUserDto.password, 5);

const findByemail = await prisma.user.findFirst({where:{email:createUserDto.email}})
if(findByemail) throw new Error("Email is already Registered");
const createuser =  await prisma.user.create({
      data: {
        email: createUserDto.email,
        password: hashedPassword, // storing password in encrypting mode
 address:createUserDto.address,city:createUserDto.city
      },select:{email:true,isAdmin:true}});
      
   const token = await this.jwtService.signAsync({sub:"ssss",username:"ssssssssss"})

res.setHeader(`Authorization`,`Bearer ${token}`)

console.log(req.headers)
   res.status(201).json(`Bearer ${token}`)
} catch (error) {
    // 0console.log(error)
    res.status(400).json(error)
    
  }  
  }
async FindAll(){


return prisma.user.findMany()


}





}
