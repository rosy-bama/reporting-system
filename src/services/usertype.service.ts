import { Injectable } from "@nestjs/common";
import { UserTypeHelper } from "src/helpers/usertype.helper";

@Injectable()
export class UserTypeService{
    constructor(
        private readonly helper: UserTypeHelper
    ){}

    async createMany(){
        return await this.helper.createMany()
    }

    async findOne(id){
        return await this.helper.findOne(id)
    }

    async findall(){
        return await this.helper.findall()
    }

    async deleteAll(){
        return await this.helper.deleteAll()
    }
}