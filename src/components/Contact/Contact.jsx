import React, { useState } from "react";
import "../Section/Section.css";

import "./Contact.css";

// To do contact form  - https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form

export const Contact = () => {
  // variable to read the state - and a function to write the state, with an initial value in the shape of the data e.g.[], or "" etc
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName ] = useState("");
  const [userTelephone,setUserTelephone] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userTextArea, setUserTextarea] = useState("");

  const handleFormSubmit = () => {
    alert(
      " Thank you for the info " + firstName + "," + " we will reply to you within the hour"
    );
  };

  console.log({ userEmail });

  return (
    <div id="Contact">
      <h2 className="Section__header Section__header-parallax img4">Contact</h2>
      {/* <div className="Section__Container"> */}
      <div className="Section__Container">
        {/* temporary container  */}
        {/* <p> work in progress</p> */}

        <div className="Contact__Form-body" name="Contact">
          <form onSubmit={handleFormSubmit} id="Contact__form">


            <label id="Contact__form-firstName" for="First name">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              // controlled input onChange - circular store the input value in state when user types a letter each letter is saved , then you feed it back to input
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              className="form-control"
              placeholder="First name"
              required
            />

            <label id="Contact__form-LastName" for="Last Name">
             Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
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

            <div id="Contact__form-email">
              <label id="Contact__form-label" for="email">
                Email
              </label>
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


            <div id="Contact__form-tel">
              <label id="Contact__form-tel" for="telephone">
                Telephone
              </label>
              <input
                type="number"
                name="telephone"
                id="telephone"
                value={userTelephone}
                onChange={(event) => setUserTelephone(event.target.value)}
                className="form-control"
                placeholder="Telephone"
              />
            </div>




            {/* update with label and associate it */}
            <textarea
              type="textArea"
              id="comments"
              value={userTextArea}
              onChange={(event) => setUserTextarea(event.target.value)}
              className="input-textarea"
              name="comment"
              placeholder="Your comments here..."
              required
            ></textarea>

            <button
              type="submit"
              id="Contact__form-submit-Btn"
              className="submit-button"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

/* 
handle submit event 
form reference https://reactjs.org/docs/forms.html 

*/
