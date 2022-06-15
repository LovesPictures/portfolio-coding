import React from "react";
import { Card } from "../Card/Card";

import { projectData } from "./projectData";

import "../Section/Section.css";

export const Projects = () => {
  return (
    <div id="Projects">
      <h2 className="Section__header Section__header-parallax img2">
        Projects
      </h2>

      <div className="Section__Container">
        {/* write js {} */}
        {projectData.map((project) => {
          {/* prop = {value} */}
          return <Card project={project}/>          

        })}
      </div>
    </div>
  );
};

//rafce
