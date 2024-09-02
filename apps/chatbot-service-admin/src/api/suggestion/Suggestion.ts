import { Question } from "../question/Question";

export type Suggestion = {
  content: string | null;
  createdAt: Date;
  id: string;
  question?: Question | null;
  updatedAt: Date;
};
