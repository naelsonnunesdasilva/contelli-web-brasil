import { Injectable } from '@nestjs/common';
import { CreateUserAdminDto } from './dto/create-user_admin.dto';
import { UpdateUserAdminDto } from './dto/update-user_admin.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserAdmin } from './entities/user_admin.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserAdminService {
  constructor(
    @InjectRepository(UserAdmin)
    private userAdminRepository: Repository<UserAdmin>,
  ){}
  create(createUserAdminDto: CreateUserAdminDto) {
    return 'This action adds a new userAdmin';
  }

  findAll() {
    return `This action returns all userAdmin`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userAdmin`;
  }

  async findByEmailAndPassword(email: string, senha: string) {
    return await this.userAdminRepository.findOne({ where: { email, senha}});
  }

  update(id: number, updateUserAdminDto: UpdateUserAdminDto) {
    return `This action updates a #${id} userAdmin`;
  }

  remove(id: number) {
    return `This action removes a #${id} userAdmin`;
  }
}
