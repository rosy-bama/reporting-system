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

  // Usertype service methods
  async findOneUserType(id){
    return await this.initHelper.findOneUserType(id)
  }
  async findAllUserType(){
    return await this.initHelper.findAllUserType()
  }
  async deleteOneUserType(id){
    return await this.initHelper.deleteOneUserType(id)
  }

  // ReportType service methods
  async findOneReportType(id){
    return await this.initHelper.findOneReportType(id)
  }
  async findAllReportType(){
    return await this.initHelper.findAllReportType()
  }
  async deleteOneReportType(id){
    return await this.initHelper.deleteOneReportType(id)
  }

  // MeetingType service methods
  async findOneMeetingType(id){
    return await this.initHelper.findOneMeetingType(id)
  }
  async findAllMeetingType(){
    return await this.initHelper.findAllMeetingType()
  }
  async deleteOneMeetingType(id){
    return await this.initHelper.deleteOneMeetingType(id)
  }

  // Church service methods
  async findOneChurch(id){
    return await this.initHelper.findOneChurch(id)
  }
  async findAllChurch(){
    return await this.initHelper.findAllChurch()
  }
  async deleteOneChurch(id){
    return await this.initHelper.deleteOneChurch(id)
  }
}

