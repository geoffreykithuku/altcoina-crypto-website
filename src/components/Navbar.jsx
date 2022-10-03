import "./Navbar.css";
import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="header">
      <div className="container">
        <h1>
          <span style={{ color: "#222" }}>Alt</span>
          <span className="primary">coina</span>
        </h1>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Featured</a>
          </li>
          <li>
            <a href="#">Earn</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="btn-group">
          <button className="btn">Connect Wallet</button>
        </div>
        <div className="hamburger">
          <FaBars size={20} style={{ color: "#333" }} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
