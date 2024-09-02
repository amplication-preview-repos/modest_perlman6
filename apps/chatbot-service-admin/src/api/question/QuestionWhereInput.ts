import { StringNullableFilter } from "../../util/StringNullableFilter";
import { HintListRelationFilter } from "../hint/HintListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { SuggestionListRelationFilter } from "../suggestion/SuggestionListRelationFilter";

export type QuestionWhereInput = {
  content?: StringNullableFilter;
  hints?: HintListRelationFilter;
  id?: StringFilter;
  status?: "Option1";
  suggestions?: SuggestionListRelationFilter;
  typeField?: "Option1";
};
