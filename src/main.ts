import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, 'images'), {
    prefix: '/image/user',
  });
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
