// App.js

// Import React library
import React from "react";

// Greeting component receives props as an argument
function Greeting(props) {
  return (
    // Display a greeting message using the name prop
    <h1>Hello, {props.name}!</h1>
  );
}

function App() {
  return (
    <div>
      {/* Passing "World" as the name prop */}
      <Greeting name="World" />

      {/* Passing "Developer" as the name prop */}
      <Greeting name="Developer" />
    </div>
  );
}

// Export App component so it can be used in other files
export default App;
