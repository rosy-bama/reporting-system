import { Module } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { UsersController } from '../controllers/users.controller';
import { UsersHelpers } from 'src/helpers/users.helpers';
import { PrismaService } from 'src/services/prisma.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UsersHelpers, PrismaService]
})
export class UsersModule {}
