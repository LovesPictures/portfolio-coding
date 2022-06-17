import React from "react";
import "../Section/Section.css";

import "./Contact.css";

// To do contact form  - https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form

export const Contact = () => {
  return (
    <div id="Contact">
      <h2 className="Section__header Section__header-parallax img4">Contact</h2>
      {/* <div className="Section__Container"> */}
      <div className="Section__Container">
        {/* temporary container  */}
        {/* <p> work in progress</p> */}

        <div className="Contact__Form-body" name="Contact">
          <form id="Contact__form">
            <label id="Contact__form-name" for="name">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              class="form-control"
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
                class="form-control"
                placeholder="Enter your email"
                required
              />
            </div>

            <textarea
              type="textArea"
              id="comments"
              // class="input-textarea"
              name="comment"
              placeholder="Your comment here..."
              required
            ></textarea>

            <button
              type="submit"
              id="Contact__form-submit-Btn"
              class="submit-button"
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
