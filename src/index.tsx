/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router"; // Correct Solid Router
import "./index.css";
import App from "./App";

import { stackedBarChartHypergraph } from "./input-data";
import { TraversalOutputComponentKeyboardFlat } from "./priority-traversal-flat";
import { TraversalOutputComponentKeyboardParentFocus } from "./priority-traversal-parent-focus";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

const path = window.location.pathname;

const pathPrefix = path.includes("benthic") ? "/benthic" : "";

render(
  () => (
    <Router base={pathPrefix}>
      <Route path="/" component={App} />
      <Route
        path="/proto-one"
        component={() => (
          <TraversalOutputComponentKeyboardParentFocus
            nodeGraph={stackedBarChartHypergraph}
            showHypergraph={false}
          />
        )}
      />
      <Route
        path="/proto-two"
        component={() => (
          <TraversalOutputComponentKeyboardFlat
            nodeGraph={stackedBarChartHypergraph}
            showHypergraph={false}
          />
        )}
      />
    </Router>
  ),
  root!
);
