import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProductWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
