import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/navbar/navbar.css";
import { AiFillHome } from "react-icons/ai";

const Navbar: React.FC = () => {
  return (
    <header>
      <div className="header-container">
        <h1 className="logo">BetFlix</h1>
        <nav>
          <NavLink className="nav-link" to="/">
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
