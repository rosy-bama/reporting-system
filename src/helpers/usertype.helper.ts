import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "src/services/prisma.service";

@Injectable()
export class UserTypeHelper {

    constructor(
        private readonly prisma: PrismaService
    ){}
    
    async createMany(): Promise<Prisma.BatchPayload>{
        return await this.prisma.userType.createMany({
            data: [
                { usertype: "GROUP_PASTOR"},
                { usertype: "PASTOR"},
                { usertype: "CELL_LEADER"}
            ],
            skipDuplicates: true
        })
    }

    async findOne(where: Prisma.UserWhereUniqueInput): Promise<Prisma.UserTypeUncheckedCreateInput>{
        return await this.prisma.userType.findUnique({where})
    }

    async findall(): Promise<Prisma.UserTypeUncheckedCreateInput[]>{
        return await this.prisma.userType.findMany()
    }

    async deleteAll(){
        return await this.prisma.userType.deleteMany({})
    }
}