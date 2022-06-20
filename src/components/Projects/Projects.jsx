import React, { useEffect, useState } from "react";
import { Card } from "../Card/Card";

// import { projectData } from "./projectData";

import "../Section/Section.css";

export const Projects = () => {
  const getProjectData = async () => {
    // error handing try catch
    try {
      const data = await fetch(
        "https://api.jsonbin.io/b/62adb726449a1f38210ea278"
      );
      const json = await data.json();
      console.log(json);
      return json;
    } catch (err) {
      console.log(err);
    }
  };
  //store the data form the API in the shape of the data e.g. [] or ""
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    console.log("useEffect has been run");
    const fetchData = async () => {
      const data = await getProjectData();
       setProjectData(data)
    };
    fetchData();
  }, []);

  return (
    <div id="Projects">
      <h2 className="Section__header Section__header-parallax img2">
        Projects
      </h2>

      <div className="Section__Container">
        {/* write js {} */}
        {projectData.map((project) => {
          /* prop = value */
          return <Card project={project} />;
        })}
      </div>
    </div>
  );
};

//rafce
/*
to do 

Warning https://reactjs.org/docs/lists-and-keys.html#keys
*/
