import React from "react";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-scroll"; // react-scroll is a library for scrolling in React
import SmallScreensNavbar from "../Navbar/SmallScreensNavbar";
import { useWindowWidthAndHeight } from "../CustomHooks";

// import logo form icons
import Icons from "../img/Icons"
import "../Section/Section.css";

/*
In this component there are 4 number of elements 
1. navbar.js component to set up the links 
. navbar for large screen width react-scroll dependencies 
2. SmallScreensNavbar.js  to manage side bar list + width react-scroll dependencies 
4. useWindowWidthAndHeight - custom Hooks which manages the changing window size

these functions called in the header.js component as  navbar into Header 
*/


export const Header = () => {
  // use our custom hook to get the the window size
  const [width, height] = useWindowWidthAndHeight();
  console.log(height);
  return (
    <header className="Navbar__header">
      <div className="header-inner">
        <Link to="Home" smooth={true} className="logo nav-link">
          {/* JR */}
          {/* logo */}
          <img className="Logo__icon" src={Icons.iconLogo} alt="html logo" /> 
          {/* <i className="fab fa-react"></i>  */}
        </Link>
        {/*if the width of the window is bigger than 1000px use <Navbar/>,
                   else user <SmallScreensNavbar/>*/}
        {width > 1000 ? (
          <Navbar navClass="nav-big" linkClassName="nav-big-link" />
        ) : (
          <SmallScreensNavbar
            navClass="nav-small"
            linkClassName="nav-small-link"
          />
        )}
      </div>
    </header>
  );
};

