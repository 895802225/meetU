import { Injectable } from '@nestjs/common';
import { CreateUploadImgDto } from './dto/create-upload-img.dto';
import { UpdateUploadImgDto } from './dto/update-upload-img.dto';

@Injectable()
export class UploadImgService {
  create(createUploadImgDto: CreateUploadImgDto) {
    return 'This action adds a new uploadImg';
  }

  findAll() {
    return `This action returns all uploadImg`;
  }

  findOne(id: number) {
    return `This action returns a #${id} uploadImg`;
  }

  update(id: number, updateUploadImgDto: UpdateUploadImgDto) {
    return `This action updates a #${id} uploadImg`;
  }

  remove(id: number) {
    return `This action removes a #${id} uploadImg`;
  }
}
