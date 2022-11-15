import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProductCreateInput = {
  name?: string | null;
  user?: UserWhereUniqueInput | null;
};
