import React from "react";

// icons
// import img1 from "../img/1.jpg";
import github from "../img/github.svg";
import netlify from "../img/netlify.csv";

// import Container from "../PageElements/ParallaxIMG";
import TextCard from "../PageElements/TextCard";

import "../Section/Section.css";
import "../Skills/Skills.css";

// import ServiceCard from "../components/PageElements/ServiceCard";

// Parallax images
// const image1 = "https://lovespictures.com/1.jpg";
// const image2 = "https://lovespictures.com/pe/3.jpg";
// const image3 = "https://lovespictures.com/pe/5.jpg";

export const Skills = () => {
  return (
    
    <div id="Skills">
      <h2 className="Section__header">Skills</h2>
      <div className="Section__Container">
      
      {/* container for the icons */}
      <ul className="Skills__ul">
        <a className="Skills__icon" href="https://github.com/LovesPictures">
          <img src={github} alt="#" />
        </a>
        <a className="Skills__icon" href="https://jr-dogs-app.netlify.app">
          <img src={netlify} width="30" alt="#" />
        </a>
      </ul>
      </div>
    </div>
  );
};

export default Skills;
