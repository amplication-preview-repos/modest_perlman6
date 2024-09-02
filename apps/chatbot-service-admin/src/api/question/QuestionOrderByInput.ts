import { SortOrder } from "../../util/SortOrder";

export type QuestionOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
