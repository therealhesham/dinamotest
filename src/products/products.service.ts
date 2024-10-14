import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma.service';
import { Response } from 'express';

@Injectable()
export class ProductsService {
  /**
   *
   */
  constructor(public prisma: PrismaService) {
  }
  
  async create(createProductDto: CreateProductDto,res : Response) {
try {
  
const newproduct=   await this.prisma.product.create({data:{name:createProductDto.name
,price:createProductDto.price,
description:createProductDto.description,
stock:createProductDto.stock // how many products available in stock
,vendorId:createProductDto.vendorId

   }})
 res.status(200).json(newproduct) 
} catch (error) {
 res.status(301).json(error.message) 
  
}
  
  }



 async findAll(req,res : Response) {

const getAll = await this.prisma.product.findMany();
res.send(getAll);
}

  // findOne(id: number) {
  //   return `This action returns a #${id} product`;
  // }

  async update(id: string,newdata:UpdateProductDto,res:Response) {
//newdata is a parameter for updated data
try {
  const update = await this.prisma.product.update({where:{id},data:newdata})
res.status(200).json(update)
} catch (error) {
res.status(301).json(error.message)
  
}

  }

  async deletebyID(id: string,res:Response) {
    try {
      const delet = await this.prisma.product.delete({where:{id}})
            res.status(200).json(delet);
    } catch (error) {
      res.status(301).json(error);
      
    }

  }
}
