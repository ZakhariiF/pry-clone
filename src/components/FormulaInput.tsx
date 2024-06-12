import { useStore } from "src/store";
import { SuggestionType } from "src/types";
import { useQuerySuggestions, useHandlers } from "src/hooks";

function FormulaInput() {
  const { input, tags, result } = useStore();
  const { data: suggestions } = useQuerySuggestions();
  const { handleChange, handleClick, handleKeyDown } = useHandlers();

  return (
    <div className="max-w-2xl mx-auto p-10">
      <div className="flex justify-center">
        <span className="text-lg font-bold">Result: {result}</span>
      </div>
      <div className="flex border rounded-[5px] py-[5px] px-[10px] my-5">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`text-nowrap mr-2 px-2 py-[2px] rounded-md ${
              tag.type === SuggestionType.TAG && "bg-blue-300"
            }`}
          >
            {tag.name}
          </span>
        ))}
        <input
          name="tag"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
          onKeyDown={handleKeyDown}
          autoComplete="off"
        />
      </div>

      <div className="w-full border-1 m-4 flex flex-col gap-4 items-start">
        {suggestions?.map((item, index) =>
          input.length > 0 && item.name.includes(input) ? (
            <div
              key={index}
              onClick={(e) => handleClick(e)}
              className="cursor-pointer py-[4px] px-[8px] rounded-lg bg-blue-300"
            >
              {item.name}
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}

export default FormulaInput;
