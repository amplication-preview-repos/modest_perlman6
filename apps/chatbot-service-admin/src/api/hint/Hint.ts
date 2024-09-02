import { Question } from "../question/Question";

export type Hint = {
  content: string | null;
  createdAt: Date;
  id: string;
  question?: Question | null;
  updatedAt: Date;
};
