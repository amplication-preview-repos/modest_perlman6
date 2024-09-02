import { Hint as THint } from "../api/hint/Hint";

export const HINT_TITLE_FIELD = "id";

export const HintTitle = (record: THint): string => {
  return record.id?.toString() || String(record.id);
};
