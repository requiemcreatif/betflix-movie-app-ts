import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/navbar/navbar.css";
import { AiFillHome } from "react-icons/ai";

const Navbar: React.FC = () => {
  return (
    <header>
      <div className="header-container">
        <NavLink className="nav-link" to="/">
          <h1 className="logo">BetFlix</h1>
        </NavLink>
        <nav>
          <NavLink className="nav-link" to="/home">
            <span>
              <AiFillHome />
            </span>
            Home
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
