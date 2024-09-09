import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { typeOrmConfig } from "./ormconfig";
import { UsersModule } from "./user/user.module";

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig), //Global database configuration
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
