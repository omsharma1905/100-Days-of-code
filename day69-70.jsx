import React, { useState } from "react";

function App() {
  // State object to store form input values
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  // Runs whenever an input field value changes
  const handleChange = (e) => {
    // Extract name and value from the input field
    const { name, value } = e.target;

    // Update the corresponding field in formData
    setFormData((prev) => ({
      ...prev, // Keep existing values
      [name]: value, // Update the changed field
    }));
  };

  // Runs when the form is submitted
  const handleSubmit = (e) => {
    // Prevent page reload
    e.preventDefault();

    // Display form data in the console
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      <h2>Simple React Form</h2>

      {/* Form with submit event handler */}
      <form onSubmit={handleSubmit}>
        {/* Username Input Field */}
        <input
          type="text"
          name="username"
          value={formData.username} // Controlled input value
          onChange={handleChange} // Updates state on typing
          placeholder="Enter Username"
        />
        <br />

        {/* Email Input Field */}
        <input
          type="email"
          name="email"
          value={formData.email} // Controlled input value
          onChange={handleChange} // Updates state on typing
          placeholder="Enter Email"
        />
        <br />

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
