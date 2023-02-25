import { Injectable, Request, Body } from '@nestjs/common';
import { CreateZjwDto } from './dto/create-zjw.dto';
import { UpdateZjwDto } from './dto/update-zjw.dto';

@Injectable()
export class ZjwService {
  create(createZjwDto: CreateZjwDto) {
    return 'This action adds a new zjw';
  }

  findAll() {
    return `This action returns all zjw`;
  }
  findzjw(@Request() req, @Body() body) {
    return req.query;
  }

  findOne(id: number) {
    return `This action returns a #${id} zjw`;
  }

  update(id: number, updateZjwDto: UpdateZjwDto) {
    return `This action updates a #${id} zjw`;
  }

  remove(id: number) {
    return `This action removes a #${id} zjw`;
  }
}
