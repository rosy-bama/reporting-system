import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from 'src/config/configuration';
import { InitHelper } from 'src/helpers/init.helper';
import { PrismaService } from 'src/services/prisma.service';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { UsersModule } from './users.module';

@Module({
  imports: [
    UsersModule, 
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration]
    })],
  controllers: [AppController],
  providers: [AppService, InitHelper, PrismaService],
})
export class AppModule {}
