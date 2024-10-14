import { Injectable } from '@nestjs/common';
import { CreateNeworderDto } from './dto/create-neworder.dto';
import { UpdateNeworderDto } from './dto/update-neworder.dto';
import { PrismaService } from 'src/prisma.service';
import { find } from 'rxjs';
import { Response } from 'express';

@Injectable()
export class NeworderService {
  /**
   *
   */
  constructor(public prisma : PrismaService) {
    
  }
  async create(createNeworderDto: CreateNeworderDto,res :Response) {
 this.prisma.$transaction(async (tx) =>{


   const findCart =await this.prisma.cart.findFirst({where:{id:createNeworderDto.cartid}})
   
   await this.prisma.order.create({data:{status:"neworder",total:findCart.total,userId:createNeworderDto.userId}})
},{maxWait:6000,timeout:5000})

// this.prisma.order.create({data:{status:"",userId:"",total:""}})
// this.prisma.cart.update({where:{id:"sssss"},data:{order:{connect:{:createNeworderDto.cartid}}}})


// })


  }

  findAll() {
    return `This action returns all neworder`;
  }

  findOne(id: number) {
    return `This action returns a #${id} neworder`;
  }

  update(id: number, updateNeworderDto: UpdateNeworderDto) {
    return `This action updates a #${id} neworder`;
  }

  remove(id: number) {
    return `This action removes a #${id} neworder`;
  }
}
