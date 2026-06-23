import React from "react";

// WelcomeMessage component receives a prop called isLoggedIn
function WelcomeMessage({ isLoggedIn }) {
  return (
    // Conditional rendering
    <h2>
      {isLoggedIn
        ? "Welcome back, user!"
        : "Please log in to continue."}
    </h2>
  );
}

function App() {
  // Variable that stores the user's login status
  const userLoggedIn = true;

  return (
    <div>
      {/* Passing userLoggedIn value as a prop to WelcomeMessage */}
      <WelcomeMessage isLoggedIn={userLoggedIn} />
    </div>
  );
}

// Export App component so it can be used in other files
export default App;
