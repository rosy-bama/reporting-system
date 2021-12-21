import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Christ Embassy Church Reporting System!';
  }
}
