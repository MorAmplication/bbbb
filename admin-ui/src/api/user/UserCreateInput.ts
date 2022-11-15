import { InputJsonValue } from "../../types";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { ProductCreateNestedManyWithoutUsersInput } from "./ProductCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  password: string;
  roles: InputJsonValue;
  organization?: OrganizationWhereUniqueInput | null;
  products?: ProductCreateNestedManyWithoutUsersInput;
  interests?: Array<"Programming" | "Design">;
};
