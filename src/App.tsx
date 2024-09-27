import type { Component } from "solid-js";

const App: Component = () => {
  const path = window.location.pathname;

  const pathPrefix = path.includes("benthic") ? "/benthic" : "";
  return (
    <div>
      <h1>Main App</h1>
      <p>Select a prototype to view:</p>
      <a href={`${pathPrefix}/proto-one`}>Go to Prototype 1</a>
      <br />
      <a href={`${pathPrefix}/proto-two`}>Go to Prototype 2</a>
    </div>
  );
};

export default App;
