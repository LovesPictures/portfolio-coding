import React from "react";

// import icons form icons
import Icons from "../img/Icons"

import "../Section/Section.css";
import "../Skills/Skills.css";


export const Skills = () => {
  return (
    <div id="Skills">
      <h2 className="Section__header Section__header-parallax img3">Skills</h2>
      <div className="Section__Container">       
        <ul className="Skills__ul">
         {/* access icons form the images */}
         <img className="Skills__icon" src={ Icons.iconHtml} alt="Html logo" />  
          {/* Languages  */}
          <img className="Skills__icon" src={ Icons.iconJavascript} alt="Javascript logo" />  
          {/* frameworks / libraries  */}
          <img className="Skills__icon" src={ Icons.iconReact} alt="React logo" />  
        
          {/* <img className="Skills__icon" src={ Icons.iconNodejs} alt="Node logo" /> */}
          {/* version control */}
          <img className="Skills__icon" src={ Icons.iconGithub} alt="Github logo" />
          <img className="Skills__icon" src={ Icons.iconNpm} alt="Npm logo" />
          <img className="Skills__icon" src={ Icons.iconTerminal} alt="Terminal logo" />
          {/* deploy */}
          <img className="Skills__icon" src={ Icons.iconNetlify} alt="Netlify logo" />
          <img className="Skills__icon" src={ Icons.iconFirebase} alt="Firebase logo" />
          {/* Sever side  */}
          {/* <img className="Skills__icon" src={ Icons.iconNext} alt="Next.js logo" /> */}
        </ul>
      </div>
    </div>
  );
};

export default Skills;




/*
   iconNetlify: require("./netlify.svg").default,
   iconJavascript: require("./javascript.svg").default,
   iconNodejs: require("./nodejs.svg").default,
   iconReact: require("./react.svg").default,
   iconTerminal: require("./terminal.png").default,
   iconVScode: require("./VScode.svg").default,
   iconHtml: require("./html.svg").default,
   iconGithub: require("./github.svg").default,
   iconFirebase: require("./firebase.png").default,

*/

