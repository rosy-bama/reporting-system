import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "src/services/prisma.service";

@Injectable()
export class InitHelper {

    constructor(
        private readonly prisma: PrismaService
    ){}
    
    async populateUserType(): Promise<Prisma.BatchPayload>{
        return await this.prisma.userType.createMany({
            data: [
                { usertype: "GROUP_PASTOR"},
                { usertype: "PASTOR"},
                { usertype: "CELL_LEADER"}
            ],
            skipDuplicates: true
        })
    }
    

    async populateReportType(): Promise<Prisma.BatchPayload>{
        return await this.prisma.reportType.createMany({
            data: [
                { description: "CELL_REPORT"},
                { description: "SERVICE_REPORT"}
            ],
            skipDuplicates: true
        })
    }

    async populateMeetingType(): Promise<Prisma.BatchPayload>{
        return await this.prisma.meetingType.createMany({
            data: [
                { type: "BIBLE_STUDY"},
                { type: "PRAYER_MEETING"},
                { type: "SUNDAY_SERVICE"},
                { type: "THANKSGIVING_SERVICE"},
                { type: "PARTNERSHIP_SERVICE"},
                { type: "BIBLE_STUDY_CLASS"}
            ],
            skipDuplicates: true
        })
    }

    async populateChurch(): Promise<Prisma.BatchPayload>{
        return await this.prisma.church.createMany({
            data: [
                { name: "BLW_UNIVERSITY_OF_BUEA", city: "Buea"},
                { name: "BLW_NDONGO", city: "Buea"},
                { name: "BLW_BAMBILI", city: "Bamenda"},
                { name: "BLW_UNIVERSITY_OF_DOUALA", city: "Douala"},
                { name: "BLW_BONABERI", city: "Douala"},
                { name: "BLW_FOUMBAN", city: "Foumban"},
                { name: "BLW_TIKU", city: "Tiku"},
                { name: "BLW_AGRICSCHOOL", city: "Bamenda"},
                { name: "BLW_POLYTECH", city: "Bamenda"}
            ],
            skipDuplicates: true
        })
    }
}