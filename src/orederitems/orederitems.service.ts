import { Injectable } from '@nestjs/common';
import { CreateOrederitemDto } from './dto/create-orederitem.dto';
import { UpdateOrederitemDto } from './dto/update-orederitem.dto';
import { PrismaService } from 'src/prisma.service';
import { Response } from 'express';
@Injectable()

export class OrederitemsService {
  constructor(public prisma: PrismaService) {}

  async  create(createOrederitemDto: CreateOrederitemDto,res:Response) {

    try {
      
  if(!createOrederitemDto.cartId){
console.log(createOrederitemDto)
    await this.prisma.$transaction(async(t)=>{

const updater =     await t.product.update({where:{id:createOrederitemDto.productId},data:{stock:{decrement:1}}})
if(updater.stock < 0) throw new Error("Product is not avaiable , try another products")


  const createCart = await this.prisma.cart.create({data:{total:createOrederitemDto.cost,OrderedItems:{create:{name:createOrederitemDto.name,productId:createOrederitemDto.productId}}}})
  return createCart;
  
    }
,{ maxWait: 5000, 
  timeout: 10000}



    )
  


}
await this.prisma.$transaction(async(t)=>{

  const updater =     await t.product.update({where:{id:createOrederitemDto.productId},data:{stock:{decrement:1}}})
  if(updater.stock < 0) throw new Error("Product is not avaiable , try another products")
  

    const createCart = await this.prisma.cart.update({where:{id:createOrederitemDto.cartId},data :{total:{increment:createOrederitemDto.cost},OrderedItems:{create:{name:createOrederitemDto.name,productId:createOrederitemDto.productId}}}})
    return createCart;
    
    // const createOrderedItem = this.prisma.itemsOrdered.create({data:{name:createOrederitemDto.name,cartId:createOrederitemDto.cartId,productId:createOrederitemDto.productId}})
    // return createOrderedItem;
    
      }
  ,{ maxWait: 5000, 
    timeout: 10000}
  
  
  
      )



const createCart = this.prisma.itemsOrdered.create({data:{productId:createOrederitemDto.productId,name:createOrederitemDto.name}})

return 'This action adds a new orederitem';

} catch (error) {
res.status(301).json(error.message)
}  
}

  findAll() {
    return `This action returns all orederitems`;
  }

  findOne(id: number) {
    return `This action returns a #${id} orederitem`;
  }

  update(id: number, updateOrederitemDto: UpdateOrederitemDto) {
    return `This action updates a #${id} orederitem`;
  }

  remove(id: number) {
    return `This action removes a #${id} orederitem`;
  }
}
