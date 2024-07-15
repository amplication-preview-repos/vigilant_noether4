import { SortOrder } from "../../util/SortOrder";

export type ProjectOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  description?: SortOrder;
  techStack?: SortOrder;
  url?: SortOrder;
  categoryId?: SortOrder;
  freelanceSiteId?: SortOrder;
};
