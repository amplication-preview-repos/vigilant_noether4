import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type TaskUpdateInput = {
  status?: "Option1" | null;
  title?: string | null;
  description?: string | null;
  project?: ProjectWhereUniqueInput | null;
};
