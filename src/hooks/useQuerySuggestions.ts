import { useQuery } from "react-query";
import { getSuggestions } from "src/api";
import { Suggestion } from "src/types";

export function useQuerySuggestions() {
  return useQuery<Suggestion[], Error>("suggestions", getSuggestions);
}
