import { Test, TestingModule } from '@nestjs/testing';
import { SellerProfilesService } from './seller-profile.service';

describe('SellerProfilesService', () => {
  let service: SellerProfilesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SellerProfilesService],
    }).compile();

    service = module.get<SellerProfilesService>(SellerProfilesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
