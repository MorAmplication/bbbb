import { UserUpdateManyWithoutOrganizationsInput } from "./UserUpdateManyWithoutOrganizationsInput";

export type OrganizationUpdateInput = {
  name?: string | null;
  users?: UserUpdateManyWithoutOrganizationsInput;
};
