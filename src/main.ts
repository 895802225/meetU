import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as session from 'express-session';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableVersioning({ type: VersioningType.URI });
  // app.use(
  //   session({
  //     secret: 'lll',
  //     name: 'zjw222',
  //     rolling: true,
  //     cookie: {
  //       maxAge: null,
  //     },
  //   }),
  // );
  await app.listen(3000);
}
bootstrap();
