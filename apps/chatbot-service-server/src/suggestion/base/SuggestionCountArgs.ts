/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SuggestionWhereInput } from "./SuggestionWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class SuggestionCountArgs {
  @ApiProperty({
    required: false,
    type: () => SuggestionWhereInput,
  })
  @Field(() => SuggestionWhereInput, { nullable: true })
  @Type(() => SuggestionWhereInput)
  where?: SuggestionWhereInput;
}

export { SuggestionCountArgs as SuggestionCountArgs };