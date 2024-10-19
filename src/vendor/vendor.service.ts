import {Next, Req,Injectable } from '@nestjs/common';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { PrismaService } from 'src/prisma.service';
import { Response } from 'express';
import { JwtService } from '@nestjs/jwt';
import { Request,NextFunction } from 'express';

@Injectable()
export class VendorService {
  constructor(public prisma: PrismaService ,public jwtService : JwtService){}
  async create(createVendorDto,res,req,next) {
try {
console.log(createVendorDto.email)
const waitvendor=  await this.prisma.vendor.findFirst({where:{email:createVendorDto.email}})
if(waitvendor) throw new Error("email is registered already in our database")

const createvendor =  await this.prisma.vendor.create({data:{email:createVendorDto.email,name:createVendorDto.name}})
res.status(201).json(createvendor);
} catch (error) {
res.status(400).json(error);
  
}
    
  }

  
  
  
   async findAll(req,res, next) {
  
  //  await this.checkAdmin(req);
  try {
    console.log("s")
    const findvendors =  await this.prisma.vendor.findMany();
    res.status(200).json(findvendors);
    } catch (error) {
    res.status(301).json(error);
      
    }
        }

  findOne(id: number) {
    return `This action returns a #${id} vendor`;
  }

  update(id: number, updateVendorDto: UpdateVendorDto) {
    return `This action updates a #${id} vendor`;
  }

  remove(id: number) {
    return `This action removes a #${id} vendor`;
  }
}
