import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Country} from "../countries/entities/country.entity";
import {Connection, Repository} from "typeorm";
import {CountryDto} from "../dto/country.dto";
import {City} from "./entities/city.entity";
import {CityDto} from "../dto/city.dto";

@Injectable()
export class CitiesService {
    constructor(@InjectRepository(City) private cityRepository: Repository<City>, private connections: Connection) {
    }

    getCities(): Promise<City[]> {
        return this.cityRepository.find();
    }

    getCity(id: number): Promise<City> {
        return this.cityRepository.findOne(id);
    }

    async addCity(city: CityDto): Promise<City[]> {
        let dbCity = new City();
        dbCity.name = city.name;
        dbCity.description = city.description;
        dbCity.countryId = city.countryId;
        dbCity.founded = city.founded;
        dbCity.popularPlaces = city.popularPlaces;
        dbCity.isCapital = city.isCapital;
        dbCity.img = city.img;
        await this.cityRepository.save(dbCity);
        return this.getCities();
    }

    async editCity(city: CityDto): Promise<City[]> {
        let dbCity = await this.getCity(city.id);
        dbCity.name = city.name;
        dbCity.description = city.description;
        dbCity.countryId = city.countryId;
        dbCity.founded = city.founded;
        dbCity.popularPlaces = city.popularPlaces;
        dbCity.isCapital = city.isCapital;
        dbCity.img = city.img;
        await this.cityRepository.save(dbCity);
        return this.getCities();
    }

    async removeCity(id: number): Promise<City[]> {
        let dbCity = await this.getCity(id);
        await this.cityRepository.remove(dbCity);
        return this.getCities();    
    }
}
