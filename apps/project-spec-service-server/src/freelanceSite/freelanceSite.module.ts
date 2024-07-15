import { Module } from "@nestjs/common";
import { FreelanceSiteModuleBase } from "./base/freelanceSite.module.base";
import { FreelanceSiteService } from "./freelanceSite.service";
import { FreelanceSiteController } from "./freelanceSite.controller";
import { FreelanceSiteResolver } from "./freelanceSite.resolver";

@Module({
  imports: [FreelanceSiteModuleBase],
  controllers: [FreelanceSiteController],
  providers: [FreelanceSiteService, FreelanceSiteResolver],
  exports: [FreelanceSiteService],
})
export class FreelanceSiteModule {}
