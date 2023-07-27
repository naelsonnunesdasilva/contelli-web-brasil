import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { UserAdminService } from './user_admin.service';
import { CreateUserAdminDto } from './dto/create-user_admin.dto';
import { UpdateUserAdminDto } from './dto/update-user_admin.dto';

@Controller('user-admin')
export class UserAdminController {
  constructor(private readonly userAdminService: UserAdminService) {}

  @Post()
  async create(@Body() createUserAdminDto: CreateUserAdminDto, @Res({ passthrough: true }) response) {
    const user = await this.userAdminService.findByEmailAndPassword(createUserAdminDto.email, createUserAdminDto.senha);

    if(user?.email === createUserAdminDto.email && user?.senha === createUserAdminDto.senha){
      response.cookie('contelli-web-admin', 'logado');
      response.writeHead(301, {
        Location: `http://localhost:3000/cadastro`
      }).end();
    }else{
      response.writeHead(301, {
        Location: `http://localhost:3000/login?erro`
      }).end();
    }
  }

  @Get()
  findAll() {
    return this.userAdminService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userAdminService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserAdminDto: UpdateUserAdminDto) {
    return this.userAdminService.update(+id, updateUserAdminDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userAdminService.remove(+id);
  }
}
