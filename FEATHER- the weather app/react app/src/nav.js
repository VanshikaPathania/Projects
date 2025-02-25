import React from "react";
import { Link } from "react-router-dom";
import "./index.css"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <span className="logo">🌤️ Feather</span>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
