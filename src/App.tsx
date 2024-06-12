import QueryProvider from "src/providers/QueryProvider";
import FormulaInput from "src/components/FormulaInput";

function App() {
  return (
    <QueryProvider>
      <FormulaInput />
    </QueryProvider>
  );
}

export default App;
