import React from "react";
import navLogo from "../../assets/shared/desktop/logo-dark.png";
import hamburger from "../../assets/shared/mobile/icon-hamburger.svg";
import { Link } from "react-router-dom";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <nav className="nav container">
      <div className="nav__logo">
        <img src={navLogo} />
      </div>
      <ul className="nav__list">
        <Link className="nav__list-link" to="/">
          <li className="nav__list-item">Our Company</li>
        </Link>
        <Link className="nav__list-link" to="/locations">
          <li className="nav__list-item">Locations</li>
        </Link>
        <Link className="nav__list-link" to="/contact">
          <li className="nav__list-item">Contact</li>
        </Link>
      </ul>
      <div className="hamburger">
        <img src={hamburger} />
      </div>
    </nav>
  );
};

export default NavBar;
