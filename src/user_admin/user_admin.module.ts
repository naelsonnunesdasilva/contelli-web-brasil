import { Module } from '@nestjs/common';
import { UserAdminService } from './user_admin.service';
import { UserAdminController } from './user_admin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserAdmin } from './entities/user_admin.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserAdmin])],
  controllers: [UserAdminController],
  providers: [UserAdminService]
})
export class UserAdminModule {}
