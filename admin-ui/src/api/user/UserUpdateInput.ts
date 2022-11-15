import { InputJsonValue } from "../../types";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { ProductUpdateManyWithoutUsersInput } from "./ProductUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  password?: string;
  roles?: InputJsonValue;
  organization?: OrganizationWhereUniqueInput | null;
  products?: ProductUpdateManyWithoutUsersInput;
  interests?: Array<"Programming" | "Design">;
};
