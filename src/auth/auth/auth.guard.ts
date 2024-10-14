import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { request, Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  /**
   *
   */
  constructor( private jwtService : JwtService) {
    
  }
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
const s  = context.switchToHttp().getRequest()
 const token = this.extractTokenFromHeader(Request)
if(!token){

  return false
}
 return true;
  }


  private async extractTokenFromHeader(request)
  {
  
  const token = request.cookies?.token;
  const verify= await this.jwtService.verifyAsync(token)
return verify  
 
  }
}
