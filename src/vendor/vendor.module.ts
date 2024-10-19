import { Module } from '@nestjs/common';
import { VendorService } from './vendor.service';
import { VendorController } from './vendor.controller';
import { PrismaService } from 'src/prisma.service';
import { JwtStrategy } from 'src/auth/auth/jwt.strategy';
import { JwtAuthGuard } from 'src/auth/auth/jwt-auth.guard';

@Module({
  controllers: [VendorController],
  providers: [VendorService,PrismaService],
})
export class VendorModule {}
