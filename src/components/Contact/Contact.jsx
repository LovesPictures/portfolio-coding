import React, { useState } from "react";
import "../Section/Section.css";

import "./Contact.css";

// To do contact form  - https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form

export const Contact = () => {

  // variable to read the state - and a function to write the state, with an initial value in the shape of the data e.g.[], or "" etc
  const [ userName, setUserName ] = useState("");
  const [ userEmail, setUserEmail] = useState ("");
  const [ userTextArea, setUserTextarea ] = useState("");
  
  const handleFormSubmit= () => {
      alert(" Thank you for the info: " + userName + "I will reply to you in an hour")
  }


console.log({userEmail});

  return (
    <div id="Contact">
      <h2 className="Section__header Section__header-parallax img4">Contact</h2>
      {/* <div className="Section__Container"> */}
      <div className="Section__Container">
        {/* temporary container  */}
        {/* <p> work in progress</p> */}

        <div className="Contact__Form-body" name="Contact">
          <form onSubmit={handleFormSubmit} id="Contact__form">
            <label id="Contact__form-name" for="name">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              // controlled input onChange - circular store the input value in state when user types a letter each letter is saved , then you feed it back to input 
              value={userName}
              onChange={(event) => setUserName(event.target.value)}
              
              className="form-control"
              placeholder="Enter your name"
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
                placeholder="Enter your email"
                required
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
              placeholder="Your comment here..."
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
