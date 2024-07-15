import { TaskCreateNestedManyWithoutProjectsInput } from "./TaskCreateNestedManyWithoutProjectsInput";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { FreelanceSiteWhereUniqueInput } from "../freelanceSite/FreelanceSiteWhereUniqueInput";

export type ProjectCreateInput = {
  title?: string | null;
  description?: string | null;
  techStack?: string | null;
  url?: string | null;
  tasks?: TaskCreateNestedManyWithoutProjectsInput;
  category?: CategoryWhereUniqueInput | null;
  freelanceSite?: FreelanceSiteWhereUniqueInput | null;
};
