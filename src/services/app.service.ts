import { Injectable, OnModuleInit } from '@nestjs/common';
import { InitHelper } from 'src/helpers/init.helper';
import { UserTypeService } from './usertype.service';

@Injectable()
export class AppService implements OnModuleInit {

  constructor(
    private readonly initHelper: InitHelper
  ){}

  async onModuleInit() {
    
    console.log("Initialization ...");
    try {
      
      await this.initHelper.populateUserType()
      await this.initHelper.populateReportType()
      await this.initHelper.populateMeetingType()
      await this.initHelper.populateChurch()


      return 'Christ Embassy Church Reporting System!';

    } catch (error) {
      console.error(error.message);  
    }
  }
}

