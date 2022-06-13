import React from "react";

// import icons
import Icons from "../img/Icons"

import "../Section/Section.css";
import "../Skills/Skills.css";


export const Skills = () => {
  return (
    <div id="Skills">
      <h2 className="Section__header">Skills</h2>
      <div className="Section__Container">       
        <ul className="Skills__ul">
         {/* access icons form the images */}
          <img className="Skills__icon" src={ Icons.iconReact} alt="React logo" />
          <img className="Skills__icon" src={ Icons.iconNetlify} alt="Netlify logo" />
          <img className="Skills__icon" src={ Icons.iconJavascript} alt="Javascript logo" />   
       
          <img className="Skills__icon" src={ Icons.iconGithub} alt="Github logo" />
          <img className="Skills__icon" src={ Icons.iconNodejs} alt="Node logo" />
          
          <img className="Skills__icon" src={ Icons.iconTerminal} alt="Terminal logo" />
          <img className="Skills__icon" src={ Icons.iconFirebase} alt="Firebase logo" />
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

