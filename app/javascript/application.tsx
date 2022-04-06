import * as React from "react";
import * as ReactDOM from "react-dom";

const App = () => {
  return <div>Hello, Rails 7!</div>;
};

const rootEl = document.getElementById("app");
ReactDOM.render(<App />, rootEl);
