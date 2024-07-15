import { ProjectCreateNestedManyWithoutCategoriesInput } from "./ProjectCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  name?: string | null;
  description?: string | null;
  projects?: ProjectCreateNestedManyWithoutCategoriesInput;
};
