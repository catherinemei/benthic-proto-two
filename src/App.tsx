import type { Component } from "solid-js";
import { TraversalOutputComponentKeyboardFlat } from "./priority-traversal-flat";

import { stackedBarChartHypergraph } from "./input-data";

const App: Component = () => {
  return (
    <TraversalOutputComponentKeyboardFlat
      nodeGraph={stackedBarChartHypergraph}
      showHypergraph={false}
    />
  );
};

export default App;
