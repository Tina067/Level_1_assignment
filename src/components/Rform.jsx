import React, { useState } from "react";
import useForm from "./useForm";
import validate from "./validate";
import "./Rform.css";

const Rform = () => {
  const [isGuest, setIsGuest] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    age: "",
    attending: "no",
    guestName: "",
  };

  const handleFormSubmit = () => {
    setIsSubmitted(true);
  };

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(initialValues, validate, handleFormSubmit);

  const handleAttendingChange = (event) => {
    const { value } = event.target;
    setIsGuest(value === "yes");
    handleChange(event);
  };

  if (isSubmitted) {
    return (
      <div className="summary">
        <h2>Form Submission Summary</h2>
        <p><strong>Name:</strong> {values.name}</p>
        <p><strong>Email:</strong> {values.email}</p>
        <p><strong>Age:</strong> {values.age}</p>
        <p><strong>Attending:</strong> {values.attending === "yes" ? "Yes" : "No"}</p>
        {isGuest && <p><strong>Guest Name:</strong> {values.guestName}</p>}
      </div>
    );
  }

  return (
    <div className="section">
      <div className="heading">
        <div className="main-Heading">Event Registration Form</div>
        <div className="main-text">Last Registration Day - July 12, 2024</div>
      </div>

      <div className="second-heading">
        <div className="sub-heading">Attendee Information</div>
        <div className="sub-text">
          Please fill name and contact information of Attendees.
        </div>
      </div>

      <div className="fields">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter Name"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            placeholder="Enter your age"
            value={values.age}
            onChange={handleChange}
          />
          {errors.age && <p className="error">{errors.age}</p>}

          <label htmlFor="attending">Are you attending with a guest?</label>
          <select
            id="attending"
            name="attending"
            value={values.attending}
            onChange={handleAttendingChange}
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>

          {isGuest && (
            <div id="guestNameField">
              <label htmlFor="guestName">Guest Name</label>
              <input
                type="text"
                id="guestName"
                name="guestName"
                placeholder="Enter Guest Name"
                value={values.guestName}
                onChange={handleChange}
              />
              {errors.guestName && <p className="error">{errors.guestName}</p>}
            </div>
          )}

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Rform;
