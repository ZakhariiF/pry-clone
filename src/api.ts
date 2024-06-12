import axios from "axios";
import { Suggestion, SuggestionType } from "src/types";

export async function getSuggestions(): Promise<Suggestion[]> {
  const { data } = await axios.get<Suggestion[]>(
    `https://652f91320b8d8ddac0b2b62b.mockapi.io/autocomplete`
  );
  const hydrated = data.map((value) => ({
    ...value,
    type: SuggestionType.TAG,
  }));
  return hydrated;
}
