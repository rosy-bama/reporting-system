import { Module } from "@nestjs/common";
import { UserTypeController } from "src/controllers/usertype.controller";
import { UserTypeHelper } from "src/helpers/usertype.helper";
import { PrismaService } from "src/services/prisma.service";
import { UserTypeService } from "src/services/usertype.service";

@Module({
    controllers: [UserTypeController],
    providers: [UserTypeService, UserTypeHelper, PrismaService]
})
export class UsertypeModule{}