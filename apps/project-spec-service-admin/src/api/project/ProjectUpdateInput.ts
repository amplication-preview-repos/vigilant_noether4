import { TaskUpdateManyWithoutProjectsInput } from "./TaskUpdateManyWithoutProjectsInput";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { FreelanceSiteWhereUniqueInput } from "../freelanceSite/FreelanceSiteWhereUniqueInput";

export type ProjectUpdateInput = {
  title?: string | null;
  description?: string | null;
  techStack?: string | null;
  url?: string | null;
  tasks?: TaskUpdateManyWithoutProjectsInput;
  category?: CategoryWhereUniqueInput | null;
  freelanceSite?: FreelanceSiteWhereUniqueInput | null;
};
