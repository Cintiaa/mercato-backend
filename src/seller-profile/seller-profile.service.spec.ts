import { Test, TestingModule } from '@nestjs/testing';
import { SellerProfileService } from './seller-profile.service';

describe('SellerProfileService', () => {
  let service: SellerProfileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SellerProfileService],
    }).compile();

    service = module.get<SellerProfileService>(SellerProfileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
