import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { typeOrmConfig } from "./ormconfig";
import { ProfileModule } from './profile/profile.module';
import { UsersModule } from "./user/user.module";
import { PersonModule } from './person/person.module';
import { SellerProfileModule } from './seller-profile/seller-profile.module';
import { CustomerProfileModule } from './customer-profile/customer-profile.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig), //Global database configuration
    ProfileModule, UsersModule, PersonModule, CustomerProfileModule, SellerProfileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
