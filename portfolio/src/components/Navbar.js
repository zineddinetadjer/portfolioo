import React from "react";
import { useEffect, useState } from "react";
import logo from "../monlogo.png";
import "../styles/navbar.css";

const Navbar = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {};
  }, []);

  return (
    <div className={`navbar ${show && "nav-black"}`}>
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
          <a href="#">Contact Me</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
