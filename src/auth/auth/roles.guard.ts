import { Injectable } from '@nestjs/common';
import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private request:Request,public jwtService : JwtService
  ) {}

 async canActivate(context: ExecutionContext) {
    
    const token = this.request.cookies?.token;

    const verify= await this.jwtService.verifyAsync(token);
  const finder =await  prisma.user.findFirst({where:{email:verify?.email}})
    if(!finder.isAdmin){
return false

    }

return true
    

  

 
}
}