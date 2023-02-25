import { Test, TestingModule } from '@nestjs/testing';
import { ZjwController } from './zjw.controller';
import { ZjwService } from './zjw.service';

describe('ZjwController', () => {
  let controller: ZjwController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ZjwController],
      providers: [ZjwService],
    }).compile();

    controller = module.get<ZjwController>(ZjwController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
