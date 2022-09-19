import { Bbbb as TBbbb } from "../api/bbbb/Bbbb";

export const BBBB_TITLE_FIELD = "id";

export const BbbbTitle = (record: TBbbb): string => {
  return record.id || record.id;
};
