import { Req,Controller, Get, Post, Body,  Res, UseGuards, Next, UsePipes, ValidationPipe } from '@nestjs/common';
import { VendorService } from './vendor.service';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { NextFunction, Request,Response } from 'express';
import { RolesGuard } from 'src/auth/auth/roles.guard';
import { JwtAuthGuard } from 'src/auth/auth/jwt-auth.guard';
import { AuthGuard } from 'src/auth/auth/auth.guard';


@Controller('vendor')
export class VendorController {
  constructor(private readonly vendorService: VendorService) {}
  
  @Post() // vendor created by admin 
  create(@Body() createVendorDto: CreateVendorDto,@Res() res:Response,@Req() req :Request,@Next() next:NextFunction) {
    return this.vendorService.create(createVendorDto,res,req,next);
  }
  
  @UseGuards(AuthGuard)
  @UsePipes(new ValidationPipe())
  @Get()
  findAll(@Res() req:Request,@Res() res:Response,@Next() next:NextFunction) {
    return this.vendorService.findAll(req,res,next);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.vendorService.findOne(id);
  // }

}
