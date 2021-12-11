import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {CitiesController} from "./cities.controller";
import {City} from "./entities/city.entity";
import {CitiesService} from "./cities.service";

@Module({
    imports: [TypeOrmModule.forFeature([City])],
    controllers: [CitiesController],
    providers: [CitiesService],
})
export class CitiesModule {}
