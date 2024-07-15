import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FreelanceSiteServiceBase } from "./base/freelanceSite.service.base";

@Injectable()
export class FreelanceSiteService extends FreelanceSiteServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
