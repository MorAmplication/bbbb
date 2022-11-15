import { Newblabla as TNewblabla } from "../api/newblabla/Newblabla";

export const NEWBLABLA_TITLE_FIELD = "hhhh";

export const NewblablaTitle = (record: TNewblabla): string => {
  return record.hhhh || record.id;
};
