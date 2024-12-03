import { Test, TestingModule } from '@nestjs/testing';
import { SensorclsService } from './sensorcls.service';

describe('SensorclsService', () => {
  let service: SensorclsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SensorclsService],
    }).compile();

    service = module.get<SensorclsService>(SensorclsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
