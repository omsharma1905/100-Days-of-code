// App.js
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
      [e.target.name]: e.target.value
    });
  };

  // Runs when form is submitted
  const handleSubmit = (e) => {
    // Prevent page refresh
    e.preventDefault();

    // Prints form data in console
    console.log("Form Submitted:", formData);
  };

  return (
    // Form with submit handler
    <form onSubmit={handleSubmit}>
      <h2>React Form</h2>

      {/* Username Input */}
      <input
        type="text"
        name="username"
        placeholder="Enter username"
        value={formData.username}
        onChange={handleChange}
      />

      <br />

      {/* Email Input */}
      <input
        type="email"
        name="email"
        placeholder="Enter email"
        value={formData.email}
        onChange={handleChange}
      />

      <br />

      {/* Submit Button */}
      <button type="submit">
        Submit
      </button>
    </form>
  );
}

// Export statement
export default App;
