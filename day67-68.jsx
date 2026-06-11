// App.js
import React, { useState } from "react";

function App() {
  const [showMessage, setShowMessage] = useState(true);
  const [items, setItems] = useState(["HTML", "CSS", "JavaScript", "React"]);

  return (
    <div>
      <button onClick={() => setShowMessage(!showMessage)}>
        Toggle Message
      </button>
      {showMessage && <p>Welcome to React!</p>}

      <h3>My Tech Stack:</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li> // Keys help React identify items
        ))}
      </ul>
    </div>
  );
}

export default App;