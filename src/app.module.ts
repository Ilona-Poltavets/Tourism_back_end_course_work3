import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import { CountriesModule } from './countries/countries.module';
import { CitiesService } from './cities/cities.service';
import { CitiesController } from './cities/cities.controller';
import { CitiesModule } from './cities/cities.module';

@Module({
  imports:[TypeOrmModule.forRoot(), CountriesModule, CitiesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
