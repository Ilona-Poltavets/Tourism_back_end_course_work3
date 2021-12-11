import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Country {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    description: string;
    @Column()
    capital: string;
    @Column()
    currency: string;
    @Column()
    flag: string
}