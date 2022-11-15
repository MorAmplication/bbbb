import { Bbbb as TBbbb } from "../api/bbbb/Bbbb";

export const BBBB_TITLE_FIELD = "dwwffw";

export const BbbbTitle = (record: TBbbb): string => {
  return record.dwwffw || record.id;
};
