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
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { UserUpdateManyWithoutOrganizationsInput } from "./UserUpdateManyWithoutOrganizationsInput";
import { Type } from "class-transformer";
@InputType()
class OrganizationUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => UserUpdateManyWithoutOrganizationsInput,
  })
  @ValidateNested()
  @Type(() => UserUpdateManyWithoutOrganizationsInput)
  @IsOptional()
  @Field(() => UserUpdateManyWithoutOrganizationsInput, {
    nullable: true,
  })
  users?: UserUpdateManyWithoutOrganizationsInput;
}
export { OrganizationUpdateInput };
