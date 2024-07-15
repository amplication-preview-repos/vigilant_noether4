import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type TaskWhereInput = {
  id?: StringFilter;
  status?: "Option1";
  title?: StringNullableFilter;
  description?: StringNullableFilter;
  project?: ProjectWhereUniqueInput;
};
