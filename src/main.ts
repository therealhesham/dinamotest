import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import {config} from  "dotenv"
import * as cookieParser from 'cookie-parser';
config()
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .setTitle('ecommerce test')
  .setDescription('Api Designed for only testing')
  .setVersion('1.0')
  .addTag('products',"we sell some stuff")
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);
app.use(cookieParser())
app.enableCors({
  origin: '*', 
  credentials: true,
});


  await app.listen(3000);
}
bootstrap();
