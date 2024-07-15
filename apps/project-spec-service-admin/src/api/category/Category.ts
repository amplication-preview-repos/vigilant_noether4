import { Project } from "../project/Project";

export type Category = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  projects?: Array<Project>;
};
