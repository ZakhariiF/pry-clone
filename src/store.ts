import { create } from "zustand";
import * as math from "mathjs";
import { Suggestion } from "src/types";

interface Store {
  tags: Suggestion[];
  setTags: (tags: Suggestion[]) => void;
  input: string;
  setInput: (value: string) => void;
  result: string;
  setResult: () => void;
}

export const useStore = create<Store>((set, get) => ({
  tags: [],
  setTags: (tags) => set({ tags }),
  input: "",
  setInput: (input) => set({ input }),
  result: "",
  setResult: () => {
    try {
      const tags = get().tags;
      const resultString = tags.reduce((acc, curr) => (acc += curr.value), "");
      const result = math.evaluate(resultString);
      set({ result });
    } catch (error) {
      set({ result: "" });
    }
  },
}));
