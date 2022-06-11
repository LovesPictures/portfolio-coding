import React from "react";
import img1 from "../img/1.jpg";
import github from "../img/github.svg";
import netlify from "../img/netlify.svg";

// import netlify from "../Section/Section.css";

import "../Section/Section.css";
import "../Card/Card.css";

/*
named export multiple things
named export code completion 
use the same names across the codebase

make small changes  - check live server
image https://create-react-app.dev/docs/adding-images-fonts-and-files/
*/

export const Card = () => {
  return (
    <div className="Card">
      <h3 className="Card__header">Card header</h3>
      <div className="line"></div>
      <img className="Card__image" src={img1} alt="#" />
      <ul>
        {/* <li><a className="Card__icon"href="https://github.com/LovesPictures"><img src={github} alt="#"/></a></li>
      <li><a className="Card__icon"href="https://jr-dogs-app.netlify.app" ><img src={netlify} width="30" alt="#"/></a></li> */}

        <a className="Card__icon" href="https://github.com/LovesPictures">
          <img src={github} alt="#" />
        </a>
        <a className="Card__icon" href="https://jr-dogs-app.netlify.app">
          <img src={netlify} width="30" alt="#" />
        </a>
      </ul>
      <p className="Card__description">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </p>
    </div>
  );
};

/*
a card container 
a heading
an image 
buttons with logo +  alt text
project description 


later 
cross hairs rollout 

*/
