import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ZjwModule } from './zjw/zjw.module';

@Module({
  imports: [ZjwModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
