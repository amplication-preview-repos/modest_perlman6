import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";

export type SuggestionCreateInput = {
  content?: string | null;
  question?: QuestionWhereUniqueInput | null;
};
