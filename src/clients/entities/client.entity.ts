import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Client {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    cnpj: string;

    @Column()
    responsavel?: string;

    @Column()
    tel?: string;

    @Column()
    cel?: string;

    @Column()
    endereco?: string;

    @Column()
    bairro?: string;

    @Column()
    complemento?: string;

    @Column()
    uf?: string;

    @Column()
    cep?: string;

    @Column()
    n?: string;

    @Column()
    cidade?: string;

    @Column()
    email?: string;

    @Column()
    n_cadastro?: string;

    @Column()
    descricao?: string;
}
