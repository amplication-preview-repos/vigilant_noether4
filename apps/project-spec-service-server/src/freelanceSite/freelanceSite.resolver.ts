import * as graphql from "@nestjs/graphql";
import { FreelanceSiteResolverBase } from "./base/freelanceSite.resolver.base";
import { FreelanceSite } from "./base/FreelanceSite";
import { FreelanceSiteService } from "./freelanceSite.service";

@graphql.Resolver(() => FreelanceSite)
export class FreelanceSiteResolver extends FreelanceSiteResolverBase {
  constructor(protected readonly service: FreelanceSiteService) {
    super(service);
  }
}
