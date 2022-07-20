import { NestFactory } from '@nestjs/core';
import { NextFunction } from 'express';
import { AppModule } from './app.module';

function globalMiddleWare(req: Request, res: Response, next: NextFunction) {
  console.log('Middlwawre One...');
  next();
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(globalMiddleWare);
  await app.listen(3000);
}
bootstrap();
