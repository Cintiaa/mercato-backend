import { Module } from '@nestjs/common';
import { CustomerProfilesService } from './customer-profile.service';
import { CustomerProfilesController } from './customer-profile.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerProfile } from './entities/customer-profile.entity';
import { CustomerProfilesRepository } from './customer-profiles.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CustomerProfile])],
  controllers: [CustomerProfilesController],
  providers: [CustomerProfilesService, CustomerProfilesRepository],
})
export class CustomerProfilesModule {}
