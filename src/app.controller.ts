import { Controller, Get, Header, HttpCode, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller('aaa')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('bbb')
  getHello(@Req() request: Request): string {
    console.log('req', request);
    return this.appService.getHello();
  }
  @Post('post')
  @HttpCode(200)
  @Header('Cache-Control', 'none')
  create(): string {
    return 'This action adds a new cat';
  }
}
