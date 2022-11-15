import { UserCreateNestedManyWithoutOrganizationsInput } from "./UserCreateNestedManyWithoutOrganizationsInput";

export type OrganizationCreateInput = {
  name?: string | null;
  users?: UserCreateNestedManyWithoutOrganizationsInput;
};
