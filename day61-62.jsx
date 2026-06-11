// App.js
import React from "react";

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return (
    <div>
      <Greeting name="World" />
      <Greeting name="Developer" />
    </div>
  );
}

export default App;