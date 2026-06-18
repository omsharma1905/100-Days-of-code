// App.js

// Import React and useState Hook
import React, { useState } from "react";

function App() {
  // State object to store form input values
  const [formData, setFormData] = useState({
    username: "",
    email: ""
  });

  // Runs whenever an input field value changes
  const handleChange = (e) => {
    setFormData({
      // Keep existing state values
      ...formData,

      // Update the field whose name matches the input name
      // Example:
      // username -> updates username
      // email -> updates email
      [e.target.name]: e.target.value
    });
  };

  // Runs when form is submitted
  const handleSubmit = (e) => {
    // Prevent page refresh
    e.preventDefault();

    // Print form data in console
    console.log("Form Submitted:", formData);
  };

  return (
    // Form with submit handler
    <form onSubmit={handleSubmit}>
      <h2>React Form</h2>

      {/* Username Input */}
      <input
        type="text"
        name="username" // Key used in state object
        placeholder="Enter username"
        value={formData.username} // Controlled input
        onChange={handleChange} // Update state on typing
      />

      <br />

      {/* Email Input */}
      <input
        type="email"
        name="email" // Key used in state object
        placeholder="Enter email"
        value={formData.email} // Controlled input
        onChange={handleChange} // Update state on typing
      />

      <br />

      {/* Submit Button */}
      <button type="submit">
        Submit
      </button>
    </form>
  );
}

// Export component so it can be used in other files
export default App;
