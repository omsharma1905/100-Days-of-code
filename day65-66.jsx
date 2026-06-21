import React, { useState } from "react";

function App() {
  // State object to store form values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  // Runs whenever the user types in an input field
  function handleChange(e) {
    const { name, value } = e.target;

    // Update state without losing existing values
    setFormData((prev) => ({
      ...prev,

      // Update only the field being edited
      [name]: value,
    }));
  }

  // Runs when the form is submitted
  function handleSubmit(e) {
    e.preventDefault();

    // Show submitted data
    alert(`Submitted: ${formData.name}, ${formData.email}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      
      {/* Name Input */}
      <input
        type="text"
        name="name"
        placeholder="Enter name"
        value={formData.name}
        onChange={handleChange}
      />

      {/* Email Input */}
      <input
        type="email"
        name="email"
        placeholder="Enter email"
        value={formData.email}
        onChange={handleChange}
      />

      {/* Submit Button */}
      <button type="submit">
        Submit
      </button>
    </form>
  );
}

// Exporting component
export default App;
