import { useCallback, useEffect } from "react";
import { OPERATORS } from "src/constants";
import { useStore } from "src/store";
import { Suggestion, SuggestionType } from "src/types";
import { useQuerySuggestions } from "./useQuerySuggestions";

export function useHandlers() {
  const { tags, setTags, input, setInput, setResult } = useStore();
  const { data: suggestions } = useQuerySuggestions();

  const handleChange = useCallback(
    (value: string) => {
      if (OPERATORS.includes(value)) {
        const operator: Suggestion = {
          name: value,
          value: value,
          type: SuggestionType.OPERATOR,
        };
        const newTags = [...tags, operator];
        setTags(newTags);
      } else {
        setInput(value);
      }
    },
    [tags, setTags, setInput]
  );

  const addTag = useCallback(
    (value: string) => {
      if (value.length === 0) {
        return;
      }
      const tagItem = suggestions?.find((s) => s.name.includes(value));
      if (tagItem !== undefined) {
        const newTags = [...tags, tagItem];
        setTags(newTags);
      }
      setInput("");
    },
    [tags, suggestions, setInput, setTags]
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "Enter") {
        addTag(input);
      }
      if (event.key === "Backspace" && input.length === 0) {
        const deleted = tags.slice(0, tags.length - 1);
        setTags(deleted);
        setResult();
      }
    },
    [input, tags, setTags, setResult, addTag]
  );

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (event.currentTarget.textContent) {
        addTag(event.currentTarget.textContent);
      }
    },
    [addTag]
  );

  useEffect(() => {
    setResult();
  }, [tags, setResult]);

  return {
    handleChange,
    handleKeyDown,
    handleClick,
  };
}
