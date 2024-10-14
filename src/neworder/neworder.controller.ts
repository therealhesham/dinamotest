import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { NeworderService } from './neworder.service';
import { CreateNeworderDto } from './dto/create-neworder.dto';
import { UpdateNeworderDto } from './dto/update-neworder.dto';
import { Response } from 'express';
@Controller('neworder')
export class NeworderController {
  constructor(private readonly neworderService: NeworderService) {}

  @Post()
  create(@Body() createNeworderDto: CreateNeworderDto,@Res() res:Response) {
    return this.neworderService.create(createNeworderDto,res);
  }

  @Get()
  findAll() {
    return this.neworderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.neworderService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNeworderDto: UpdateNeworderDto) {
    return this.neworderService.update(+id, updateNeworderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.neworderService.remove(+id);
  }
}
