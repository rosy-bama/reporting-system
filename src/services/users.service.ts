import { Injectable } from '@nestjs/common';
import { UsersHelpers } from 'src/helpers/users.helpers';


@Injectable()
export class UsersService {
  constructor(
    private readonly helper: UsersHelpers
  ){}

  async create(data) {
    return await this.helper.createNewUserAccount(data);
  }

  async findAll() {
    return await this.helper.findAllUsers();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
