import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { UploadImgService } from './upload-img.service';
import { CreateUploadImgDto } from './dto/create-upload-img.dto';
import { UpdateUploadImgDto } from './dto/update-upload-img.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('img')
export class UploadImgController {
  constructor(private readonly uploadImgService: UploadImgService) {}

  // @Get()
  // findAll() {
  //   return this.uploadImgService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.uploadImgService.findOne(+id);
  // }
  @Post('save')
  @UseInterceptors(FileInterceptor('file'))
  upload(@UploadedFile() file, @Body('uid') uid) {
    console.log('uid', uid);
    console.log('upload', file); // return this.uploadService.upload();
    return { file, uid };
  }
}
