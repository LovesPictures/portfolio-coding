import React from 'react'
import "./Footer.css";

// import icons form icons
import Icons from "../img/Icons"


export const Footer = () => {
  return (
    <div id="Footer">
    <div className="Footer__header ">
    {/* <div className="Section__Container">  */}
        <ul className="Footer__ul">
         {/* access icons from the images */}
          <img className="Footer__icon" src={Icons.iconInstagram} onClick="(https://www.instagram.com/lovespictures__/)" target="_blank" alt="instagram logo" />  
          <img className="Footer__icon" src={ Icons.iconLinkedin} alt="Javascript logo" />  
          <img className="Footer__icon" src={ Icons.iconInstagram} alt="React logo" />  
          <img className="Footer__icon" src={ Icons.iconTwitter} alt="React logo" /> 
        </ul>
      </div>
     </div>
  )
}




// warning https://code.visualstudio.com/docs/editor/refactoring 

