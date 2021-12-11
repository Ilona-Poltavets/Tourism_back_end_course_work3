import {BadRequestException, Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put} from '@nestjs/common';
import {CountryDto} from "../dto/country.dto";
import {City} from "./entities/city.entity";
import {CitiesService} from "./cities.service";
import {CityDto} from "../dto/city.dto";

@Controller('cities')
export class CitiesController {
    constructor(private cityService: CitiesService) {
    }

    @Get()
    getCitiesList(): Promise<City[]> {
        return this.cityService.getCities();
    }

    @Get(":id")
    getCity(@Param('id', new ParseIntPipe({exceptionFactory: error => new BadRequestException(`This is custom text. As error is:${error}`)}))cityId: number): Promise<City> {
        return this.cityService.getCity(cityId);
    }

    @Post()
    addCity(@Body()body: CityDto): Promise<City[]> {
        return this.cityService.addCity(body);
    }

    @Put()
    editCity(@Body() body: CityDto): Promise<City[]> {
        return this.cityService.editCity(body);
    }

    @Delete(':id')
    deleteCity(@Param('id') id: number): Promise<City[]> {
        return this.cityService.removeCity(id);
    }
}
