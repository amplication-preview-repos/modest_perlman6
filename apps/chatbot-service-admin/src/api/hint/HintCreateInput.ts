import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";

export type HintCreateInput = {
  content?: string | null;
  question?: QuestionWhereUniqueInput | null;
};
