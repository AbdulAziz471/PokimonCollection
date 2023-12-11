import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = (props) => {
  return (
    <header>
      <div>
        <h1 className="Logo">
          <NavLink className="Logo" s to="/">
            {props.logo}
          </NavLink>
        </h1>
      </div>
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <NavLink to="/Feature">FeaturesCard</NavLink>
          </li>
          <li>
            <NavLink to="/Compare">Compare</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
