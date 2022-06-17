//Navbar.js
import React from "react";
import { Link } from "react-scroll";

import "./Navbar.css"

const Navbar = ({ navClass, linkClassName }) => (
  <NavComponent navClass={navClass} linkClassName={linkClassName} />
);

export const NavComponent = ({ onClick, navClass, linkClassName }) => (
  <nav className={navClass}>
    {[ "Home", "About", "Projects", "Skills", "Blog", "Contact"].map((section) => (
      <Link
        to={section}
        smooth={true}
        className={linkClassName}
        onClick={onClick}
      >
        {section}
      </Link>
    ))}
  </nav>
);
export default Navbar;


//rafce