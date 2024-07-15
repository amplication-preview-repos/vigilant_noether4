import { FreelanceSiteWhereInput } from "./FreelanceSiteWhereInput";
import { FreelanceSiteOrderByInput } from "./FreelanceSiteOrderByInput";

export type FreelanceSiteFindManyArgs = {
  where?: FreelanceSiteWhereInput;
  orderBy?: Array<FreelanceSiteOrderByInput>;
  skip?: number;
  take?: number;
};
