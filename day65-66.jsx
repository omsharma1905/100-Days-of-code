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
        name="name" // Used to identify which field is being updated
        placeholder="Enter name"
        value={formData.name} // Controlled by React state
        onChange={handleChange} // Updates state when user types
      />

      {/* Email Input */}
      <input
        type="email"
        name="email" // Used to identify this field
        placeholder="Enter email"
        value={formData.email} // Controlled by React state
        onChange={handleChange} // Updates state when user types
      />

      {/* Submit Button */}
      <button type="submit">
        Submit
      </button>
    </form>
  );
}

// Export component
export default App;
