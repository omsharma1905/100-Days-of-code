// App.js
import React, { useState } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [users, setUsers] = useState(["Alice", "Bob", "Charlie"]);

  return (
    <div>
      <h2>Conditional Rendering</h2>
      {loggedIn ? (
        <p>Welcome back, user!</p>
      ) : (
        <p>Please log in to continue.</p>
      )}

      <h2>User List</h2>
      {users.length > 0 ? (
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
}

export default App;