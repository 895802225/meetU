import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ZjwModule } from './zjw/zjw.module';
import { UploadImgModule } from './upload-img/upload-img.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ZjwModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public/uploaded'),
      serveRoot: '/image/user',
    }),
    UploadImgModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
