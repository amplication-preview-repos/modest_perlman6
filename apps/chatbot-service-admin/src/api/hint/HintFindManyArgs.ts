import { HintWhereInput } from "./HintWhereInput";
import { HintOrderByInput } from "./HintOrderByInput";

export type HintFindManyArgs = {
  where?: HintWhereInput;
  orderBy?: Array<HintOrderByInput>;
  skip?: number;
  take?: number;
};
