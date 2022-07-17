import React from "react";
import logo from "../mylogo.png";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="LOGO" />
      <ul className="liste">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Skills</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
