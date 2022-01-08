import { Module } from '@nestjs/common';
import { InitHelper } from 'src/helpers/init.helper';
import { PrismaService } from 'src/services/prisma.service';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { UsersModule } from './users.module';

@Module({
  imports: [UsersModule],
  controllers: [AppController],
  providers: [AppService, InitHelper, PrismaService],
})
export class AppModule {}
