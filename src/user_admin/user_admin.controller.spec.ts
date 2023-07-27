import { Test, TestingModule } from '@nestjs/testing';
import { UserAdminController } from './user_admin.controller';
import { UserAdminService } from './user_admin.service';

describe('UserAdminController', () => {
  let controller: UserAdminController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserAdminController],
      providers: [UserAdminService],
    }).compile();

    controller = module.get<UserAdminController>(UserAdminController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
