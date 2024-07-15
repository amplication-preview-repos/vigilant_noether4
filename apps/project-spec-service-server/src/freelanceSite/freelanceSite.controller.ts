import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FreelanceSiteService } from "./freelanceSite.service";
import { FreelanceSiteControllerBase } from "./base/freelanceSite.controller.base";

@swagger.ApiTags("freelanceSites")
@common.Controller("freelanceSites")
export class FreelanceSiteController extends FreelanceSiteControllerBase {
  constructor(protected readonly service: FreelanceSiteService) {
    super(service);
  }
}
