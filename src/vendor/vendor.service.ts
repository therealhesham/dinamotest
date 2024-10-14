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
// await  this.checkAdmin(req)
const waitvendor=  await this.prisma.vendor.findFirst({where:{email:createVendorDto.email}})
if(waitvendor) throw new Error("email is registered already in our database")

const createvendor =  await this.prisma.vendor.create({data:{email:createVendorDto.email,name:createVendorDto.name}})
res.status(200).json(createvendor);
} catch (error) {
res.status(301).json(error.message);
  
}
    
  }

  async  checkAdmin(req:Request) {
    try {
    // console.log(req.cookies)

        const token = req.cookies.token;
        if(!token)  
      throw new Error("no token provided")
      
    const verify= await this.jwtService.verifyAsync(token);
  const finder =await  this.prisma.user.findFirst({where:{email:verify?.email}})
  console.log(finder)
    if(!finder.isAdmin){
  
  throw new Error("not admin")
    }
  
    
  // next()
  
} catch (error) {
//  return error   
 throw new Error(error.message)

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
