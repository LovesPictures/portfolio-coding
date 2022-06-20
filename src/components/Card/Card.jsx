import React from "react";

// import img1 from "../img/1.jpg";
// import github from "../img/github.svg";
// import netlify from "../img/netlify.csv";
// refactored
import Icons from "../img/Icons";

import "../Section/Section.css";
import "../Card/Card.css";

/*
named export multiple things
named export code completion 
use the same names across the codebase

make small changes  - check live server
image https://create-react-app.dev/docs/adding-images-fonts-and-files/
*/
// prop value inside curlie brackets
export const Card = ({ project }) => {
  return (
    <div className="Card__wrapper">
      <div className="Card">
        <img className="Card__image" src={project.img} alt="#" />

        <h3 className="Card__header ">{project.title}</h3>
        {/* container for the icons */}
        <ul className="Card__ul">
          <a
            className="Card__icon"
            target="_blank"
            rel="noreferrer"
            href={project.linkGithub}
          >
            <img src={Icons.iconGithub} alt="#" />
          </a>
          <a
            className="Card__icon"
            target="_blank"
            rel="noreferrer"
            href={project.linkNetlify}
          >
            <img src={Icons.iconNetlify} width="30" alt="#" />
            {/* To do - assing a name to the icons */}
            <p>{project.iconName}</p>
          </a>
        </ul>
        {/* roll over project name for more information */}
        <div className="Card__description-wrapper">
          <article className="Card__description">
            {/* <strong>Project Description:</strong> {project.description} */}
            {project.description}
          </article>
        </div>
      </div>
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
