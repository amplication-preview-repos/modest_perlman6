import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";

export type HintUpdateInput = {
  content?: string | null;
  question?: QuestionWhereUniqueInput | null;
};
