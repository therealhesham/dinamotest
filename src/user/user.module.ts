import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtStrategy } from 'src/auth/auth/jwt.strategy';
@Module({
  controllers: [UserController],
  imports: [
    // UsersModule,
    JwtModule.register({
      global: true,
      
      secret: "hesham",
      signOptions: { expiresIn: '100000s' }
    }),
  ],
  providers: [UserService,JwtStrategy],
  
})
export class UserModule {}
