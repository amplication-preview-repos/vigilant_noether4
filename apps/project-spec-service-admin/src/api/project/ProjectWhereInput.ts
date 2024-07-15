import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TaskListRelationFilter } from "../task/TaskListRelationFilter";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { FreelanceSiteWhereUniqueInput } from "../freelanceSite/FreelanceSiteWhereUniqueInput";

export type ProjectWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  description?: StringNullableFilter;
  techStack?: StringNullableFilter;
  url?: StringNullableFilter;
  tasks?: TaskListRelationFilter;
  category?: CategoryWhereUniqueInput;
  freelanceSite?: FreelanceSiteWhereUniqueInput;
};
