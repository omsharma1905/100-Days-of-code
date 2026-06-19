import React, { useState } from "react";

function App() {
  // State to track whether the user is logged in or not
  const [loggedIn, setLoggedIn] = useState(true);

  // State to store the list of users
  const [users, setUsers] = useState(["Alice", "Bob", "Charlie"]);

  return (
    <div>
      {/* Conditional Rendering Example */}
      <h2>Conditional Rendering</h2>

      {/* Ternary operator checks login status */}
      {loggedIn ? (
        <p>Welcome back, user!</p> // Displayed when loggedIn is true
      ) : (
        <p>Please log in to continue.</p> // Displayed when loggedIn is false
      )}

      {/* Rendering Lists Example */}
      <h2>User List</h2>

      {/* Check if users array has any items */}
      {users.length > 0 ? (
        <ul>
          {/* map() loops through the users array and renders each user */}
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
