// auth/auth.module.ts
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
// import { AuthService } from './auth.service';
// import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
// import { UsersModule } from '../users/users.module'; // Import your users module
import { VendorModule } from 'src/vendor/vendor.module';
import { VendorController } from 'src/vendor/vendor.controller';

@Module({
  
  providers: [ JwtStrategy]
//   controllers: [],
})
export class AuthModule {}
