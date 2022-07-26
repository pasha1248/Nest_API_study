import { Test, TestingModule } from '@nestjs/testing';
import { ServisesService } from './servises.service';

describe('ServisesService', () => {
  let service: ServisesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServisesService],
    }).compile();

    service = module.get<ServisesService>(ServisesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
