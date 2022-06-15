import React from "react";

// import icons
// import Icons from "../img/Icons";

import "../Section/Section.css";
import "../About/About.css";

export const About = () => {
  return (
    <div id="About">
      <h2 className="Section__header Section__header-parallax img1 ">About - Jude</h2>
      <div className="Section__line"></div>
      <div className="Section__Container">
          <p className="p__description">
            Artist, Lecturer and Creative Coder, specialising in mobile, screen
            based playful interactive serious games in immersive and real world
            spaces. My skill set includes photography, moving image, creative
            coding, augmented reality, virtual reality and data analytics for
            narrative and conversation based serious games with a focus on
            storytelling for social change. Guest speaker at FACT// University of
            Sussex, Heritage Network Brighton and Hove, Brighton Digital
            Festival, Digital Inequalities University of Brighton, School of
            History, Art History &amp; Philosophy University of Sussex, in
            subjects related to digital humanities and digital geographies.
          </p>
      </div>
    </div>
  );
};

/*refactor into a component - the class to be use across element is: .Section__header-parallax */

function addParallax(selector){

  const updateScroll = ()=>{
    //getting the parallax element e.g. image, then get the element distance form the top of the screen
     let picScroll = document.querySelector(selector).getBoundingClientRect().top
     //set the elements background position to a multiple of the scrolled distance in px
    document.querySelector(selector).style.backgroundPositionY = `${picScroll*0.7}px`
   
  }
  // initalise the parallax
  updateScroll();

  //update parallax on scroll 
  document.addEventListener("scroll", function(){
    updateScroll(); 
  });

}
// when the page is finish loading add parallax to elements
window.onload = (event) => {
addParallax(".Section__header-parallax.img1")
addParallax(".Section__header-parallax.img2")
addParallax(".Section__header-parallax.img3")
addParallax(".Section__header-parallax.img4")

};




/*  

get the number of pixels scrolled down the page
offest the image times the number by multiples of 1/2


*/

