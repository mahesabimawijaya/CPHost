import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';

const PORT = process.env.PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());
  app.enableCors({ origin: 'http://localhost:5173', credentials: true });

  await app.listen(PORT, () => {
    console.log(`  ➜  [API] Local:   http://localhost:${PORT}`);
  });
}
bootstrap();
