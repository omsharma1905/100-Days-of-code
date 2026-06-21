import React, { useState } from "react";

function App() {
    // State to control whether the message is visible or not
  const [showMessage, setShowMessage] = useState(true);

  // State to store an array of technologies
  const [items, setItems] = useState([
    "HTML",
    "CSS",
    "JavaScript",
    "React",
  ]);

  return (
    <div>
      {/* Button to show/hide the message */}
      <button
        onClick={() =>
          // Toggle the value between true and false
          setShowMessage(!showMessage)
        }
      >
        Toggle Message
      </button>

      {/* Conditional Rendering */}
      {showMessage && <p>Welcome to React!</p>}

      <h3>My Tech Stack:</h3>

      {/* Rendering a list using map() */}
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

// Exporting component
export default App;
