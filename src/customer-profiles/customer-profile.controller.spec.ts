import { Test, TestingModule } from '@nestjs/testing';
import { CustomerProfilesController } from './customer-profile.controller';
import { CustomerProfilesService } from './customer-profile.service';

describe('CustomerProfilesController', () => {
  let controller: CustomerProfilesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomerProfilesController],
      providers: [CustomerProfilesService],
    }).compile();

    controller = module.get<CustomerProfilesController>(CustomerProfilesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
