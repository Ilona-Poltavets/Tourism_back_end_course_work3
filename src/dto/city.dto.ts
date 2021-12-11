import {IsInt, IsNotEmpty} from "class-validator";

export class CityDto{
    @IsInt()
    id:number;
    @IsNotEmpty()
    countryId:number;
    @IsNotEmpty()
    name:string;
    founded:number;
    description:string;
    @IsNotEmpty()
    popularPlaces:string;
    isCapital:boolean;
    img:string;
}