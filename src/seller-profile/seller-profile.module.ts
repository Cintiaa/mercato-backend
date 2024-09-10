import { Module } from '@nestjs/common';
import { SellerProfileService } from './seller-profile.service';
import { SellerProfileController } from './seller-profile.controller';

@Module({
  controllers: [SellerProfileController],
  providers: [SellerProfileService],
})
export class SellerProfileModule {}
