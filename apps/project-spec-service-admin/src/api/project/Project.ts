import { Task } from "../task/Task";
import { Category } from "../category/Category";
import { FreelanceSite } from "../freelanceSite/FreelanceSite";

export type Project = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  description: string | null;
  techStack: string | null;
  url: string | null;
  tasks?: Array<Task>;
  category?: Category | null;
  freelanceSite?: FreelanceSite | null;
};
