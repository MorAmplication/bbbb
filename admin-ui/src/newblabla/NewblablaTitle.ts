import { Newblabla as TNewblabla } from "../api/newblabla/Newblabla";

export const NEWBLABLA_TITLE_FIELD = "id";

export const NewblablaTitle = (record: TNewblabla): string => {
  return record.id || record.id;
};
