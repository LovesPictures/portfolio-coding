// import React from "react";
// import "../Section/Section.css";

// const Home = () => {
//   return <section id="Home">Home</section>;
// };

// export default Home;


import React from 'react'
import "../Section/Section.css";
import "./Home.css";

const Home = () => {
  return (
    <div id="Home">
    <h2 className="Section__header ">Home</h2>
      <div className="Section__Container">
          <p className="p__description">

            Headline 
            Artist, Lecturer and Creative Coder, specialising in mobile, screen
            based playful interactive serious games in immersive and real world
            spaces. My skill set includes photography, moving image, creative
           
           
          </p>
      </div>
    </div>
  );
};

export default Home;
