import { HintCreateNestedManyWithoutQuestionsInput } from "./HintCreateNestedManyWithoutQuestionsInput";
import { SuggestionCreateNestedManyWithoutQuestionsInput } from "./SuggestionCreateNestedManyWithoutQuestionsInput";

export type QuestionCreateInput = {
  content?: string | null;
  hints?: HintCreateNestedManyWithoutQuestionsInput;
  status?: "Option1" | null;
  suggestions?: SuggestionCreateNestedManyWithoutQuestionsInput;
  typeField?: "Option1" | null;
};
