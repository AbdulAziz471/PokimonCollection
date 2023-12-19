import React from "react";
import { NavLink } from "react-router-dom";
import poki from "../../Images/poki.png";
import { useTheme } from "../../../ThemeContext";
import dark from "../../Images/dark.svg";
import light from "../../Images/light.svg";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="white text-black p-2 md:px-8 text-center flex flex-row justify-evenly items-center dark:bg-gray-600 dark:text-gray-200">
      <div className="w-half ">
        <NavLink to="/">
          <img className="w-[100px]" src={poki} alt="Pokemon Icon" />
        </NavLink>
      </div>
      <nav className="navbar">
        <ul className="nav-links list-none p-0 flex justify-center">
          <li className="mx-4">
            <NavLink to="/Feature" className="custom-link">
              FeaturesCard
            </NavLink>
          </li>
          <li className="mx-4">
            <NavLink to="/Compare" className="custom-link">
              Compare
            </NavLink>
          </li>
          <li className="mx-4">
            <NavLink to="/contact" className="custom-link">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <button onClick={toggleTheme}>
        {theme === "light" ? (
          <img src={dark} alt="Dark Mode" />
        ) : (
          <img src={light} alt="Light Mode" />
        )}
      </button>
    </header>
  );
};
export default Header;
