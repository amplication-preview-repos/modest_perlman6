import { HintUpdateManyWithoutQuestionsInput } from "./HintUpdateManyWithoutQuestionsInput";
import { SuggestionUpdateManyWithoutQuestionsInput } from "./SuggestionUpdateManyWithoutQuestionsInput";

export type QuestionUpdateInput = {
  content?: string | null;
  hints?: HintUpdateManyWithoutQuestionsInput;
  status?: "Option1" | null;
  suggestions?: SuggestionUpdateManyWithoutQuestionsInput;
  typeField?: "Option1" | null;
};
