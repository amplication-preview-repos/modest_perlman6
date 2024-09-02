import { Hint } from "../hint/Hint";
import { Suggestion } from "../suggestion/Suggestion";

export type Question = {
  content: string | null;
  createdAt: Date;
  hints?: Array<Hint>;
  id: string;
  status?: "Option1" | null;
  suggestions?: Array<Suggestion>;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
