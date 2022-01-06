import { Controller, Delete, Get, Param, ParseIntPipe } from '@nestjs/common';
import { AppService } from '../services/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Usertype Find and Delete Routes
  @Get('usertype/:id')
  async findOneUserType(@Param('id', ParseIntPipe) id: number): Promise<any>{
    return await this.appService.findOneUserType({id: +id})
  }
  @Get('usertype')
  async findAllUserType(){
    return await this.appService.findAllUserType()
  }
  @Delete('usertype/:id')
  async deleteOneUserType(@Param('id', ParseIntPipe) id: number){
    return await this.appService.deleteOneUserType({id: +id})
  }

  // ReportType Find and Delete Routes
  @Get('reportType/:id')
  async findOneReportType(@Param('id', ParseIntPipe) id: number){
    return await this.appService.findOneReportType({id: +id})
  }
  @Get('reportType')
  async findAllReportType(){
    return await this.appService.findAllReportType()
  }
  @Delete('reportType/:id')
  async deleteOneReportType(@Param('id', ParseIntPipe) id: number){
    return await this.appService.deleteOneReportType({id: +id})
  }

  // MeetingType Find and Delete Routes
  @Get('meetingType/:id')
  async findOneMeetingType(@Param('id', ParseIntPipe) id: number){
    return await this.appService.findOneMeetingType({id: +id})
  }
  @Get('meetingType')
  async findAllMeetingType(){
    return await this.appService.findAllMeetingType()
  }
  @Delete('meetingType/:id')
  async deleteOneMeetingType(@Param('id', ParseIntPipe) id: number){
    return await this.appService.deleteOneMeetingType({id: +id})
  }

  // ChurchType Find and Delete Routes
  @Get('church/:id')
  async findOneChurch(@Param('id', ParseIntPipe) id: number){
    return await this.appService.findOneChurch({id: +id})
  }
  @Get('church')
  async findAllChurch(){
    return await this.appService.findAllChurch()
  }
  @Delete('church/:id')
  async deleteOneChurch(@Param('id', ParseIntPipe) id: number){
    return await this.appService.deleteOneChurch({id: +id})
  }
}
