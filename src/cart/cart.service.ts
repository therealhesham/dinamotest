import { Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CartService {
  /**
   *
   */
  constructor(public prisma : PrismaService) {
    
  }
  create(createCartDto: CreateCartDto) {
    return 'This action adds a new cart';
  }
//this route wil only accessed by admin and handled through admin panel and 
//authguard will be implemented at the end of the project
  async findAll(req,res) {

 const findmany = await   this.prisma.cart.findMany();
 console.log(findmany)
 res.status(201).json(findmany);
    // return `This action returns all cart`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cart`;
  }

  update(id: number, updateCartDto: UpdateCartDto) {
    return `This action updates a #${id} cart`;
  }

  remove(id: number) {
    return `This action removes a #${id} cart`;
  }
}
