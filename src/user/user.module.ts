import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';
@Module({
  controllers: [UserController],
  imports:[  
     
    
    JwtModule.register({
      global:true,
      secret: 'secret_key',
      // signOptions: { expiresIn: 60000000}, // Token expiration time
    })  
    
    // in production i'm gonna store it in .env/secret file
],
  providers: [UserService],
  
})
export class UserModule {}
