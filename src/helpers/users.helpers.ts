import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { CreateUserDto } from "src/dto/create-user.dto";
import { PrismaService } from "src/services/prisma.service";

@Injectable()
export class UsersHelpers {
    constructor(
        private readonly prisma: PrismaService
    ){}

    async createNewUserAccount(user: Prisma.UserCreateInput) : Promise<any>{
        return await this.prisma.user.create({
            data: user
        });
    }

    async updateUser(where: Prisma.UserWhereUniqueInput, data: Prisma.UserUpdateInput): Promise<any>{
        return await this.prisma.user.update({
            where,
            data
        })
    }
}