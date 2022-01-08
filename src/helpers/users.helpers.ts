import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { CreateUserDto } from "src/dto/create-user.dto";
import { PrismaService } from "src/services/prisma.service";

@Injectable()
export class UsersHelpers {
    constructor(
        private readonly prisma: PrismaService
    ){}

    async createNewUserAccount(user: Prisma.UserUncheckedCreateInput) : Promise<any>{
        user.dob = new Date(user.dob);

        return await this.prisma.user.create({
            data: user,
        });
    }
    
    async findAllUsers(){
        return await this.prisma.user.findMany()
    }

    async updateUser(where: Prisma.UserWhereUniqueInput, data: Prisma.UserUpdateInput): Promise<any>{
        return await this.prisma.user.update({
            where,
            data
        })
    }
}