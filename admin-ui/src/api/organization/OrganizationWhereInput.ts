import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type OrganizationWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  users?: UserListRelationFilter;
};
