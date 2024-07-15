import { Project } from "../project/Project";

export type FreelanceSite = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  url: string | null;
  projects?: Array<Project>;
};
