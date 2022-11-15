import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProductUpdateInput = {
  name?: string | null;
  user?: UserWhereUniqueInput | null;
};
