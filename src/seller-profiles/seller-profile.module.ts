import { Module } from '@nestjs/common';
import { SellerProfilesService } from './seller-profile.service';
import { SellerProfilesController } from './seller-profile.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SellerProfile } from './entities/seller-profile.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SellerProfile])],
  controllers: [SellerProfilesController],
  providers: [SellerProfilesService],
})
export class SellerProfilesModule {}
