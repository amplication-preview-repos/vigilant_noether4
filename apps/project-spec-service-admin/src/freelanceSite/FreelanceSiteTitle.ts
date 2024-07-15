import { FreelanceSite as TFreelanceSite } from "../api/freelanceSite/FreelanceSite";

export const FREELANCESITE_TITLE_FIELD = "name";

export const FreelanceSiteTitle = (record: TFreelanceSite): string => {
  return record.name?.toString() || String(record.id);
};
