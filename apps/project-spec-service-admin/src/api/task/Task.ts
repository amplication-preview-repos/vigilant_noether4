import { Project } from "../project/Project";

export type Task = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  status?: "Option1" | null;
  title: string | null;
  description: string | null;
  project?: Project | null;
};
