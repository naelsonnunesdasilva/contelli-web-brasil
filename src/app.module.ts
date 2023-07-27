import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from './clients/clients.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from './clients/entities/client.entity';
import { UserAdminModule } from './user_admin/user_admin.module';
import { UserAdmin } from './user_admin/entities/user_admin.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'welcome',
      database: 'contelli-web',
      entities: [Client, UserAdmin],
      synchronize: true,
    }),
    ClientsModule,
    UserAdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
