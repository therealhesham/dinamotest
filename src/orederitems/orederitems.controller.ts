import { Controller, Get, Post, Body, Res,Patch, Param, Delete } from '@nestjs/common';
import { OrederitemsService } from './orederitems.service';
import { CreateOrederitemDto } from './dto/create-orederitem.dto';
import { UpdateOrederitemDto } from './dto/update-orederitem.dto';
import { Response } from 'express';

@Controller('orederitems')
export class OrederitemsController {
  constructor(private readonly orederitemsService: OrederitemsService) {}

  @Post()
  create(@Body() createOrederitemDto: CreateOrederitemDto,@Res() res:Response) {
    return this.orederitemsService.create(createOrederitemDto,res);
  }

  @Get()
  findAll() {
    return this.orederitemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orederitemsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrederitemDto: UpdateOrederitemDto) {
    return this.orederitemsService.update(+id, updateOrederitemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orederitemsService.remove(+id);
  }
}
