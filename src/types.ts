export enum SuggestionType {
  TAG = "tag",
  OPERATOR = "operator",
}

export interface Suggestion {
  name: string;
  category?: string;
  value: number | string;
  id?: string;
  type: SuggestionType;
}
