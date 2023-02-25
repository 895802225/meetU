import { Test, TestingModule } from '@nestjs/testing';
import { ZjwService } from './zjw.service';

describe('ZjwService', () => {
  let service: ZjwService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ZjwService],
    }).compile();

    service = module.get<ZjwService>(ZjwService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
