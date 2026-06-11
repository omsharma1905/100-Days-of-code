// App.js
import React from "react";

function WelcomeMessage({ isLoggedIn }) {
  return (
    <h2>{isLoggedIn ? "Welcome back, user!" : "Please log in to continue."}</h2>
  );
}

function App() {
  const userLoggedIn = true;

  return (
    <div>
      <WelcomeMessage isLoggedIn={userLoggedIn} />
    </div>
  );
}

export default App;