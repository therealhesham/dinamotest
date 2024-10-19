import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProductsModule } from './products/products.module';
import { VendorModule } from './vendor/vendor.module';
import { PrismaService } from './prisma.service';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { NeworderModule } from './neworder/neworder.module';
import { OrederitemsModule } from './orederitems/orederitems.module';
import { CartModule } from './cart/cart.module';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: "hesham",
      signOptions: { expiresIn: '60s' }, // Adjust as necessary
    }),
    // JwtModule,
    UserModule, ProductsModule, VendorModule, NeworderModule, OrederitemsModule, CartModule],
  controllers: [AppController,ProductsController],
  providers: [JwtService,AppService,PrismaService,ProductsService],
})
export class AppModule {}
