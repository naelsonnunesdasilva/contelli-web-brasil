import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from './entities/client.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client)
    private clientRepository: Repository<Client>,
  ){}
  async create(createClientDto: CreateClientDto) {
    return await this.clientRepository.save(createClientDto);
  }

  async findAll() {
    return await this.clientRepository.find();
  }

  async findOne(id: number) {
    return await this.clientRepository.findOne({where: {id}});
  }

  async findOneByCnpj(cnpj: string) {
    return await this.clientRepository.findOne({where: {cnpj}});
  }

  async update(id: number, updateClientDto: UpdateClientDto) {
    const client = await this.clientRepository.findOne({where: {id}});
    const clientData = {...client, updateClientDto};
    return await this.clientRepository.save(clientData);
  }

  async remove(id: number) {
    const client = await this.clientRepository.findOne({where: {id}});
    return this.clientRepository.remove(client);
  }
}
