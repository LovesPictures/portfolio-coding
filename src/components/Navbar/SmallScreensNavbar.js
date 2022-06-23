//SmallScreensNavbar.js
import React, { useState } from 'react';
import { NavComponent } from './Navbar';

const SmallScreensNavbar = () =>{
    // declare 'translate' as a state variable
    let [translate, setTranslate ] = useState(true);
    return(
        <div> 
             <button className="Header__navbar-hamburger-btn"
                     onClick= {()=> setTranslate(!translate)}>  {/* toggle translate */}
                  {/* change the btn text based on whether translate is true or false */} 
                 {translate?<span>&#9776;</span>:<span>&times;</span>}
             </button>

             {/*hide and show the sidebar list based on whether translate is true or false*/}

{/* mobile link  -------------------------------- */}
             {/* - How to increase the removeTransition so it is completely off the page  */}
             <div id="Navbar__mobile-container" className={`${translate? "addTransition": "removeTransition"}`}>
                <NavComponent
                    navClass="Mobile__container-links-container"
                    linkClassName = "Mobile__container-links"
                    onClick = {()=>setTranslate(true)}  //set translate to true to hide the sidebar list
                />
             </div>
        </div>
    )
}
export default SmallScreensNavbar;
