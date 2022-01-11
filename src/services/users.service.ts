import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UsersHelpers } from 'src/helpers/users.helpers';
import * as bcrypt from 'bcrypt'
import { ConfigService } from '@nestjs/config';


@Injectable()
export class UsersService {
  constructor(
    private readonly helper: UsersHelpers,
    private readonly configService: ConfigService
  ){}
  async create(createUserDto: Prisma.UserUncheckedCreateInput) {
    createUserDto.dob = new Date(createUserDto.dob);    
    createUserDto.password = await bcrypt.hash(createUserDto.password, Number(this.configService.get("SALT")));    

    return await this.helper.createNewUserAccount(createUserDto);
  }

  async findAll() {
    return await this.helper.findAllUsers();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: Prisma.UserUncheckedUpdateInput) {
    return `This action updates a #${id} user`;
  } 

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
