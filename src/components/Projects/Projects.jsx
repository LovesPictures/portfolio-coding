// import React from "react";

// import Container from "../PageElements/ParallaxIMG";
// import TextCard from "../PageElements/TextCard";

// // Parallax images
// const image1 = "https://lovespictures.com/1.jpg";
// const image2 = "https://lovespictures.com/pe/3.jpg";
// const image3 = "https://lovespictures.com/pe/5.jpg";

// export const Skills = () => {
//   return (
//     <section >
// <TextCard id="Projects" name="Projects"> </TextCard>
// <p className="para-1">
//             Artist, Lecturer and Creative Coder, specialising in mobile, screen
//             based playful interactive serious games in immersive and real world
//             spaces. My skill set includes photography, moving image, creative
//             coding, augmented reality, virtual reality and data analytics for
//             narrative and conversation based serious games with a focus on
//             storytelling for socialchange. Guest speaker at FACT// University of
//             Sussex, Heritage Network Brighton and Hove, Brighton Digital
//             Festival, Digital Inequalities University of Brighton, School of
//             History, Art History &amp; Philosophy University of Sussex, in
//             subjects related to digital humanities and digital geographies.
//           </p>



//  </section>
//   )
// }

import React from "react";
import { Card } from "../Card/Card";


import "../Section/Section.css";

export const Projects = () => {
  return (
    
    <div id="Projects">
      <h2 className="Section__header">Projects</h2>

      <div className="Section__Container">
        <Card/>   
        <Card/>  
        <Card/>  
        <Card/> 
        <Card/>   
        <Card/>  
      
      </div>
    </div>
  );
};

// export default Projects;
//rafce