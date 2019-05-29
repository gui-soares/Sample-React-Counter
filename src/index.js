import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { Counter } from "./components/counter";

function App() {
  return (
    <div className="App">
      <h1>React Counter</h1>
      <Counter />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
