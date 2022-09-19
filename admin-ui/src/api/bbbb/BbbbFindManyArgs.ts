import { BbbbWhereInput } from "./BbbbWhereInput";
import { BbbbOrderByInput } from "./BbbbOrderByInput";

export type BbbbFindManyArgs = {
  where?: BbbbWhereInput;
  orderBy?: Array<BbbbOrderByInput>;
  skip?: number;
  take?: number;
};
