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
console.log(updater.stock)
if(updater.stock < 0) throw new Error("Product is not avaiable , try another products")
console.log(updater.stock < 0)

  const createCart = await t.cart.create({data:{total:createOrederitemDto.cost,OrderedItems:{create:{name:createOrederitemDto.name,productId:createOrederitemDto.productId}}}})
 console.log(createCart)
  res.send(createCart)
  
    }
,{ maxWait: 10000, 
  timeout: 10000}



    )
  


}
await this.prisma.$transaction(async(t)=>{

  const updater =     await t.product.update({where:{id:createOrederitemDto.productId},data:{stock:{decrement:1}}})
  if(updater.stock < 0) throw new Error("Product is not avaiable , try another products")
  

    const createCart = await t.cart.update({where:{id:createOrederitemDto.cartId},data :{total:{increment:createOrederitemDto.cost},OrderedItems:{create:{name:createOrederitemDto.name,productId:createOrederitemDto.productId}}}})
    

    const itemsOrdered = await t.itemsOrdered.create(
      {data:{productId:createOrederitemDto.productId,name:createOrederitemDto.name,cartId:createCart.id}})
    console.log("createCart",itemsOrdered)
    res.send(createCart)
        // const createOrderedItem = this.prisma.itemsOrdered.create({data:{name:createOrederitemDto.name,cartId:createOrederitemDto.cartId,productId:createOrederitemDto.productId}})
    // return createOrderedItem;
    
      }
  ,{ maxWait: 5000, 
    timeout: 10000}
  
  
  
      )


} catch (error) {
res.status(301).json(error)
}  
}

 async findAll() {
    return await this.prisma.cart.findMany();
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
