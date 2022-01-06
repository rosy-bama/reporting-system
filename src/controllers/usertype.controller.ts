import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { UserTypeService } from "src/services/usertype.service";

@Controller('usertype')
export class UserTypeController{
    constructor(
        private readonly usertypeService: UserTypeService
    ){}

    @Get('/:id')
    async findOne(@Param('id', ParseIntPipe) id: number){        
        return await this.usertypeService.findOne(id);
    }

    @Get()
    async findAll(){
        return await this.usertypeService.findall();
    }

    @Delete()
    async deleteAll(){
        return await this.usertypeService.deleteAll();
    }
}