import { User } from "../user/User";

export type Organization = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  users?: Array<User>;
};
