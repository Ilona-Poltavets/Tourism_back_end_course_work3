import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Country} from "./entities/country.entity";
import {Repository, Connection} from "typeorm";
import {CountryDto} from "../dto/country.dto";

@Injectable()
export class CountriesService {
    constructor(@InjectRepository(Country) private countryRepository: Repository<Country>) {
    }

    getCountries(): Promise<Country[]> {
        return this.countryRepository.find();
    }

    getCountry(id: number): Promise<Country> {
        return this.countryRepository.findOne(id);
    }

    async addCountry(country: CountryDto): Promise<Country[]> {
        let dbCountry = new Country();
        dbCountry.name = country.name;
        dbCountry.description = country.description;
        dbCountry.capital = country.capital;
        dbCountry.currency = country.currency;
        dbCountry.flag = country.flag;
        await this.countryRepository.save(dbCountry);
        return this.getCountries();
    }

    async editCountry(country: CountryDto): Promise<Country[]> {
        let dbCountry = await this.getCountry(country.id);
        dbCountry.name = country.name;
        dbCountry.description = country.description;
        dbCountry.capital = country.capital;
        dbCountry.currency = country.currency;
        dbCountry.flag = country.flag;
        await this.countryRepository.save(dbCountry);
        return this.getCountries();
    }

    async removeCountry(id: number): Promise<Country[]> {
        let dbCountry = await this.getCountry(id);
        await this.countryRepository.remove(dbCountry);
        return this.getCountries();
    }
}
