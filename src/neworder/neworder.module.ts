import { Module } from '@nestjs/common';
import { NeworderService } from './neworder.service';
import { NeworderController } from './neworder.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [NeworderController],
  providers: [NeworderService,PrismaService],
})
export class NeworderModule {}
