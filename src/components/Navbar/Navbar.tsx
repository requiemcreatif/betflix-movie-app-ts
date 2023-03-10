import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/navbar/navbar.css";
import { AiFillHome } from "react-icons/ai";
import betflixLogo from "../../images/BETFLIX.svg";

const Navbar: React.FC = () => {
  return (
    <header>
      <div className="header-container">
        <NavLink className="nav-link" to="/">
          <img src={betflixLogo} alt="Betflix Logo" />
        </NavLink>
        <nav>
          <NavLink className="nav-link" to="/home" aria-label="Home">
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
