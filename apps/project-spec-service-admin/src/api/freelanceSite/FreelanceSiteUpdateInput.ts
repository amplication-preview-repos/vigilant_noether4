import { ProjectUpdateManyWithoutFreelanceSitesInput } from "./ProjectUpdateManyWithoutFreelanceSitesInput";

export type FreelanceSiteUpdateInput = {
  name?: string | null;
  url?: string | null;
  projects?: ProjectUpdateManyWithoutFreelanceSitesInput;
};
