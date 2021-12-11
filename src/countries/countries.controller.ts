import {BadRequestException, Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put} from '@nestjs/common';
import {Country} from "./entities/country.entity";
import {countries} from "../db";
import {CountriesService} from "./countries.service";
import {CountryDto} from "../dto/country.dto";

@Controller('countries')
export class CountriesController {
    //private countriesList=countries;
    constructor(private countryService: CountriesService) {
    }

    @Get()
    getCountriesList(): Promise<Country[]> {
        return this.countryService.getCountries();
    }

    @Get(":id")
    getCountry(@Param('id', new ParseIntPipe({exceptionFactory: error => new BadRequestException(`This is custom text. As error is:${error}`)}))countryId: number): Promise<Country> {
        return this.countryService.getCountry(countryId);
    }

    @Post()
    addCountry(@Body()body: CountryDto): Promise<Country[]> {
        return this.countryService.addCountry(body);
    }

    @Put()
    editCountry(@Body() body: CountryDto): Promise<Country[]> {
        return this.countryService.editCountry(body);
    }

    @Delete(':id')
    deleteCountry(@Param('id') id: number): Promise<Country[]> {
        return this.countryService.removeCountry(id);
    }
}
