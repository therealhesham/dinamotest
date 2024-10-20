
import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
  } from '@nestjs/common';
  import { JwtService } from '@nestjs/jwt';
  import { Request } from 'express';
import { PrismaService } from 'src/prisma.service';
  @Injectable()
  export class CheckAdmin implements CanActivate {
    constructor(public prisma : PrismaService,private jwtService: JwtService) {}
  
    async canActivate(context: ExecutionContext): Promise<boolean> {
      const request = context.switchToHttp().getRequest();
  
      const token = this.extractTokenFromHeader(request);
      console.log(token)
      // if (!token) {
      //   throw new UnauthorizedException();
      // }
      try {
        const payload = await this.jwtService.verifyAsync(
          token,
          {
            secret: "hesham"
          }
        );
      
const finderbyemail  =await this.prisma.user.findFirst({where:{email:payload.email}})
if(finderbyemail.isAdmin) return true
      } catch {
        throw new UnauthorizedException();
      }
    }
  
    private extractTokenFromHeader(request: Request): string | undefined {
      const [type, token] = request.headers.authorization?.split(' ') ?? [];
      return type === 'Bearer' ? token : undefined;
    }
  }
  