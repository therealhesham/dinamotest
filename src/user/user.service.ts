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


const createuser =  await prisma.user.create({
      data: {
        email: createUserDto.email,
        password: hashedPassword, // storing password in encrypting mode
 address:createUserDto.address,city:createUserDto.city
      },


    });
const token =    await this.jwtService.signAsync({createuser},{secret:"secret_key"})
res.cookie("token", token, { httpOnly: true, secure: true, sameSite: 'lax' });
  res.send(createUserDto)
} catch (error) {
    // console.log(error)
    res.status(301).json(error.message)
    
  }  
  }




}
