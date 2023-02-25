import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Version,
  Query,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ZjwService } from './zjw.service';
import { CreateZjwDto } from './dto/create-zjw.dto';
import { UpdateZjwDto } from './dto/update-zjw.dto';

/**
 * 版本控制
 */
@Controller('zjw')
export class ZjwController {
  constructor(private readonly zjwService: ZjwService) {}

  @Post('post')
  create(@Body('name') name: string) {
    // return this.zjwService.create(createZjwDto);
    return {
      code: 200,
      message: name,
    };
  }

  @Get()
  @Version('1') // 版本控制
  findAll() {
    return this.zjwService.findAll();
  }

  @Get('find')
  findzjw(@Query() query) {
    // const params = this.zjwService.findzjw(req, body);
    return {
      code: 200,
      message: query,
    };
  }

  @Get('findThrow')
  findThrow(@Query() query) {
    throw new HttpException(
      {
        status: HttpStatus.FORBIDDEN,
        error: 'This is a custom message',
      },
      HttpStatus.FORBIDDEN,
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.zjwService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateZjwDto: UpdateZjwDto) {
    return this.zjwService.update(+id, updateZjwDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.zjwService.remove(+id);
  }
}
