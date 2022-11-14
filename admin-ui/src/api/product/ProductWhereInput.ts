import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ProductWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  itemPrice?: FloatNullableFilter;
  description?: StringNullableFilter;
  orders?: OrderListRelationFilter;
  morField?: DateTimeNullableFilter;
  arielFiled?: StringNullableFilter;
};
