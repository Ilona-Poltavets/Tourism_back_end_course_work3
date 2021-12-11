import {IsInt, IsNotEmpty, MaxLength} from "class-validator";

export class CountryDto{
    @IsInt()
    id: number;
    @MaxLength(60)
    @IsNotEmpty()
    name: string;
    description: string;
    @IsNotEmpty()
    capital: string;
    @IsNotEmpty()
    currency: string;
    flag: string
}