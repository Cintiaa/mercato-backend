import { Test, TestingModule } from '@nestjs/testing';
import { SellerProfilesController } from './seller-profile.controller';
import { SellerProfilesService } from './seller-profile.service';

describe('SellerProfilesController', () => {
  let controller: SellerProfilesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SellerProfilesController],
      providers: [SellerProfilesService],
    }).compile();

    controller = module.get<SellerProfilesController>(SellerProfilesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
