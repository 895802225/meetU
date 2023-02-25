import { Module } from '@nestjs/common';
import { ZjwService } from './zjw.service';
import { ZjwController } from './zjw.controller';

@Module({
  controllers: [ZjwController],
  providers: [ZjwService],
})
export class ZjwModule {}
