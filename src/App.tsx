import type { Component } from "solid-js";
import { TraversalOutputComponentKeyboardFlat } from "./priority-traversal-flat";

import { lineGraphHypergraph } from "./input-line";

const App: Component = () => {
  return (
    <TraversalOutputComponentKeyboardFlat
      nodeGraph={lineGraphHypergraph}
      showHypergraph={false}
    />
  );
};

export default App;
