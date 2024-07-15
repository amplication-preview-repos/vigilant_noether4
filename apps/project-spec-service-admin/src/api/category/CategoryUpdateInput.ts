import { ProjectUpdateManyWithoutCategoriesInput } from "./ProjectUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  name?: string | null;
  description?: string | null;
  projects?: ProjectUpdateManyWithoutCategoriesInput;
};
