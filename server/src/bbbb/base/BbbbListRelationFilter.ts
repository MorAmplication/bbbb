/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BbbbWhereInput } from "./BbbbWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class BbbbListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => BbbbWhereInput,
  })
  @ValidateNested()
  @Type(() => BbbbWhereInput)
  @IsOptional()
  @Field(() => BbbbWhereInput, {
    nullable: true,
  })
  every?: BbbbWhereInput;

  @ApiProperty({
    required: false,
    type: () => BbbbWhereInput,
  })
  @ValidateNested()
  @Type(() => BbbbWhereInput)
  @IsOptional()
  @Field(() => BbbbWhereInput, {
    nullable: true,
  })
  some?: BbbbWhereInput;

  @ApiProperty({
    required: false,
    type: () => BbbbWhereInput,
  })
  @ValidateNested()
  @Type(() => BbbbWhereInput)
  @IsOptional()
  @Field(() => BbbbWhereInput, {
    nullable: true,
  })
  none?: BbbbWhereInput;
}
export { BbbbListRelationFilter };
