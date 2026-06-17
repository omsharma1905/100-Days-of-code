// Import React and useState Hook
import React, { useState } from "react";

function App() {
  /* formData stores the values of the form fields. */
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  /* error stores validation error messages.
    Initially empty. */
  const [error, setError] = useState("");

  /* Runs whenever the user types in an input field.
    e.target.name  -> input field name (name/email)
    e.target.value -> current value entered by user */
  const handleChange = (e) => {
    setFormData({
      ...formData, // keep existing values
      [e.target.name]: e.target.value // update changed field
    });
  };

  /* Runs when the form is submitted. */
  const handleSubmit = (e) => {

    // Prevent page refresh
    e.preventDefault();

    /* Validation: Check if name or email is empty. */
    if (!formData.name || !formData.email) {
      setError("Please fill in all fields");
    } else {
      // Clear error if validation passes
      setError("");
      // Show submitted data
      alert(
        `Submitted: ${formData.name} (${formData.email})`
      );
    }
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>React Form Example</h2>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        {/* Name Input */}
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          // Update state when user types
          onChange={handleChange}
        />

        <br />
        <br />

        {/* Email Input */}
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          // Update state when user types
          onChange={handleChange}
        />

        <br />
        <br />

        {/* Submit Button */}
        <button type="submit">
          Submit
        </button>

      </form>

      {/* Conditional Rendering --> If error contains text: show error message
                                    If error is empty: show nothing */}
      {error && (
        <p style={{ color: "red" }}>
          {error}
        </p>
      )}

    </div>
  );
}

export default App;
