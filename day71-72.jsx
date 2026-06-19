import React, { useState } from "react";

function App() {
  // State to track whether the user is logged in or not
  const [loggedIn, setLoggedIn] = useState(true);

  // State to store the list of users
  const [users, setUsers] = useState(["Alice", "Bob", "Charlie"]);

  return (
    <div>
      <h2>Conditional Rendering</h2>

      {/* Ternary operator checks login status */}
      {loggedIn ? (
        <p>Welcome back, user!</p>
      ) : (
        <p>Please log in to continue.</p>
      )}

      <h2>Rendering User List</h2>

      {/* Check if users array has any items */}
      {users.length > 0 ? (
        <ul>
          {users.map((user, index) => (
            // key helps React identify each list item uniquely
            <li key={index}>{user}</li>
          ))}
        </ul>
      ) : (
      // Displayed when the users array is empty
        <p>No users found.</p>
      )}
    </div>
  );
}

export default App;
