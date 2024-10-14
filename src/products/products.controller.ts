import { Controller, Get, Post, Body, Patch, Param, Delete, Res,Req } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma.service';
import { Response ,Request} from 'express';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto , @Res() res:Response) {
    return this.productsService.create(createProductDto,res );
  }

  @Get()
  findAll(@Req() req:Request,@Res() res:Response) {
    return this.productsService.findAll(req,res);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.productsService.findOne(+id);
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto,@Res() res:Response) {
    
    return this.productsService.update(id, updateProductDto,res);
  
  }

  @Delete(':id')
  deletebyID(@Param('id') id: string,@Res() res:Response) {
    return this.productsService.deletebyID(id,res);
  }
}
