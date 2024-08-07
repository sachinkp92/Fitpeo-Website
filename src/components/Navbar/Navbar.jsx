import React from "react";
import "./style.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <i className="bx bx-grid-alt menu"></i>
        <div className="search-container">
          <i className="bx bx-search search-result"></i>
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="nav-icons-container">
        <div className="nav-icon">
          <i className="bx bx-envelope"></i>
        </div>
        <div className="nav-icon">
          <i className="bx bx-cog"></i>
        </div>
        <div className="nav-icon">
          <i className="bx bx-bell"></i>
        </div>
        <div className="nav-icon">
          <img src="./img/profile.png" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
