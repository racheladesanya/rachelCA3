import { Column, PrimaryGeneratedColumn } from "typeorm";

export class BioDatum {
     @PrimaryGeneratedColumn()
     NIN: number;

     @Column()
     firstName: string;

     @Column({nullable: true})
     middleName: string;

     @Column()
     lastName: string;

     @Column({nullable: true})
     dateOfBirth: Date;

     @Column({nullable: true})
     nationality: string;

     @Column({nullable: true})
     countryOfbirth: string;

     @Column({nullable: true})
     stateOfbirth: string;

     @Column({nullable: true})
     townOfbirth: string;

     @Column({nullable: true})
     residenceAddress: string;

     @Column({nullable: true})
     profession: string;

     @Column({default: true})
     isActive: boolean;
}


    