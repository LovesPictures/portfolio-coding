import React, { useState } from "react";

import "../Section/Section.css";
import "./Newsletter.css";

export const Newsletter = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const handleFormSubmit = (event) => {
    // An function to prevent default refresh of the form onload
    event.preventDefault();

    alert(" Thank you for singing up for my newsletter!");
  };

  return (
    <div id="Newsletter">
      <h2 className="Section__header Section__header-parallax img4">Blog</h2>
      <div className="Section__Container">
        <div className="Newsletter__form-body" name="Newsletter">
          <h3>Sign up for my newsletter </h3>
          <fieldset>
            <form onSubmit={handleFormSubmit} id="Newsletter__form">
              <label id="Newsletter__form-firstName" for="First name"></label>
              <input
                type="text"
                name="firstName"
                id="Newsletter__firstName"
                // controlled input onChange - circular store the input value in state when user types a letter each letter is saved , then you feed it back to input
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                className="form-control"
                placeholder="First name"
                required
              />

              <label id="Newsletter__form-LastName" for="Last Name"></label>
              <input
                type="text"
                name="lastName"
                id="Newsletter__lastName"
                // controlled input onChange - circular store the input value in state when user types a letter each letter is saved , then you feed it back to input
                value={lastName}
                //  To do  first lett to upper case
                onChange={(event) => setLastName(event.target.value)}
                //(event.target.value.charAt(0).toUpperCase())}
                // str.charAt(0).toUpperCase() + str.slice(1);
                className="form-control"
                placeholder="Last name"
                required
              />

              <div id="Newsletter__form-email">
                <label id="Newsletter__form-label" for="email"></label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={userEmail}
                  onChange={(event) => setUserEmail(event.target.value)}
                  className="form-control"
                  placeholder="Email"
                  required
                />
              </div>

              <button
                type="submit"
                id="Newsletter__form-submit-Btn"
                className="submit-button"
              >
                Submit
              </button>
            </form>
          </fieldset>
        </div>
      </div>
    </div>
  );
};
