import { Module } from '@nestjs/common';
import { UploadImgService } from './upload-img.service';
import { UploadImgController } from './upload-img.controller';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
@Module({
  imports: [
    MulterModule.register({
      // 用于配置上传，这部分也可以写在路由上
      storage: diskStorage({
        // destination: join(__dirname, '../images'),
        destination: join(__dirname, '../images'),
        // destination: join('./public/uploaded'),
        filename: (_, file, callback) => {
          const fileName = `${_.body.uid + extname(file.originalname)}`;
          return callback(null, fileName);
        },
      }),
    }),
  ],
  controllers: [UploadImgController],
  providers: [UploadImgService],
})
export class UploadImgModule {}
