import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Country} from "../../countries/entities/country.entity";

@Entity()
export class City {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name:string;
    @ManyToOne((type) => Country,(country)=>country.id)
    countryId:number;
    @Column()
    founded:number;
    @Column()
    description:string;
    @Column()
    popularPlaces:string;
    @Column()
    isCapital:boolean;
    @Column()
    img:string;
}