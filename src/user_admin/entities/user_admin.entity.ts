import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserAdmin {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    senha: string;

}
