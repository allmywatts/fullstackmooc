import React from "react";
import ReactDOM from "react-dom";

const DateNow = (props) => <p>The time is {props.now.toString()}</p>;
const Hello = (props) => (
  <>
    <p>Hello {props.name}</p>
  </>
);

const App = () => {
  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Sam" />
      <Hello name="Satan" />
      <Hello name="Stan" />
      <DateNow now={new Date()} />
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
