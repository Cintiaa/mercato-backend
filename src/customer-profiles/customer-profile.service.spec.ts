import { Test, TestingModule } from '@nestjs/testing';
import { CustomerProfilesService } from './customer-profile.service';

describe('CustomerProfilesService', () => {
  let service: CustomerProfilesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomerProfilesService],
    }).compile();

    service = module.get<CustomerProfilesService>(CustomerProfilesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
