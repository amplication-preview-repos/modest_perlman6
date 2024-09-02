import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";

export type SuggestionUpdateInput = {
  content?: string | null;
  question?: QuestionWhereUniqueInput | null;
};
