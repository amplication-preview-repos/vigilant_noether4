import { ProjectCreateNestedManyWithoutFreelanceSitesInput } from "./ProjectCreateNestedManyWithoutFreelanceSitesInput";

export type FreelanceSiteCreateInput = {
  name?: string | null;
  url?: string | null;
  projects?: ProjectCreateNestedManyWithoutFreelanceSitesInput;
};
