import React from "react";
import "./Nav.scss";

const Nav = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-bar__logo">Fooodo</div>
      <ul className="nav-bar__nav">
        <li>
          <a href="!#">Works</a>
        </li>
        <li>
          <a href="!#">UX Process</a>
        </li>
        <li>
          <a href="!#">About Me</a>
        </li>
        <li>
          <a href="!#">Blog</a>
        </li>
        <li>
          <a href="!#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
