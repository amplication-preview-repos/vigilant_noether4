/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  FreelanceSite as PrismaFreelanceSite,
  Project as PrismaProject,
} from "@prisma/client";

export class FreelanceSiteServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.FreelanceSiteCountArgs, "select">
  ): Promise<number> {
    return this.prisma.freelanceSite.count(args);
  }

  async freelanceSites(
    args: Prisma.FreelanceSiteFindManyArgs
  ): Promise<PrismaFreelanceSite[]> {
    return this.prisma.freelanceSite.findMany(args);
  }
  async freelanceSite(
    args: Prisma.FreelanceSiteFindUniqueArgs
  ): Promise<PrismaFreelanceSite | null> {
    return this.prisma.freelanceSite.findUnique(args);
  }
  async createFreelanceSite(
    args: Prisma.FreelanceSiteCreateArgs
  ): Promise<PrismaFreelanceSite> {
    return this.prisma.freelanceSite.create(args);
  }
  async updateFreelanceSite(
    args: Prisma.FreelanceSiteUpdateArgs
  ): Promise<PrismaFreelanceSite> {
    return this.prisma.freelanceSite.update(args);
  }
  async deleteFreelanceSite(
    args: Prisma.FreelanceSiteDeleteArgs
  ): Promise<PrismaFreelanceSite> {
    return this.prisma.freelanceSite.delete(args);
  }

  async findProjects(
    parentId: string,
    args: Prisma.ProjectFindManyArgs
  ): Promise<PrismaProject[]> {
    return this.prisma.freelanceSite
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .projects(args);
  }
}