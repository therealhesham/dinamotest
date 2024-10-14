import { Module } from '@nestjs/common';
import { OrederitemsService } from './orederitems.service';
import { OrederitemsController } from './orederitems.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [OrederitemsController],
  providers: [OrederitemsService,PrismaService],
})
export class OrederitemsModule {





}
