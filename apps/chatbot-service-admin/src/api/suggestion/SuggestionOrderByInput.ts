import { SortOrder } from "../../util/SortOrder";

export type SuggestionOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  questionId?: SortOrder;
  updatedAt?: SortOrder;
};
