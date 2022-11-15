import { User } from "../user/User";

export type Product = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  user?: User | null;
};
