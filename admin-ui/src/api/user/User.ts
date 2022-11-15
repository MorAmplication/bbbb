import { JsonValue } from "type-fest";
import { Organization } from "../organization/Organization";
import { Product } from "../product/Product";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  roles: JsonValue;
  organization?: Organization | null;
  products?: Array<Product>;
  interests?: Array<"Programming" | "Design">;
};
