import React, { useState } from "react";

function App() {
  // State object to store form values
  // formData = current state
  // setFormData = function to update state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  // Runs whenever the user types in an input field
  function handleChange(e) {
    // Extract name and value from the input that triggered the event
    // Example:
    // <input name="name" value="Om" />
    // name = "name"
    // value = "Om"
    const { name, value } = e.target;

    // Update state without losing existing values
    setFormData((prev) => ({
      // Copy previous state
      ...prev,

      // Update only the field being edited
      // If name = "email"
      // then it becomes:
      // email: value
      [name]: value,
    }));
  }

  // Runs when the form is submitted
  function handleSubmit(e) {
    // Prevent page refresh (default form behavior)
    e.preventDefault();

    // Show submitted data
    alert(`Submitted: ${formData.name}, ${formData.email}`);
  }

  return (
    // onSubmit triggers when button type="submit" is clicked
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
