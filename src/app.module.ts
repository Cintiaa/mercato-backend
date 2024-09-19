import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { typeOrmConfig } from "./ormconfig";
import { ProfilesModule } from "./profiles/profiles.module";
import { UsersModule } from "./users/users.module";
import { PersonModule } from "./person/person.module";
import { SellerProfilesModule } from "./seller-profiles/seller-profile.module";
import { CustomerProfilesModule } from "./customer-profiles/customer-profile.module";
import { AuthModule } from "./auth/auth.module";
@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig), //Global database configuration
    UsersModule,
    ProfilesModule,
    PersonModule,
    CustomerProfilesModule,
    SellerProfilesModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
