import React from "react";
import { Link } from "react-router-dom";
import navLogo from "../../assets/shared/desktop/logo-light.png";
import facebook from "../../assets/shared/desktop/icon-facebook.svg";
import twitter from "../../assets/shared/desktop/icon-twitter.svg";
import instagram from "../../assets/shared/desktop/icon-instagram.svg";
import youtube from "../../assets/shared/desktop/icon-youtube.svg";
import pinterest from "../../assets/shared/desktop/icon-pinterest.svg";
import "./Footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content container">
        <div className="footer__content-nav">
          <div className="footer__content-nav-logo">
            <img src={navLogo} />
          </div>
          <ul className="footer__content-nav-list">
            <Link className="footer__content-nav-list-link" to="/">
              <li className="footer__content-nav-list-item">Our Company</li>
            </Link>
            <Link className="footer__content-nav-list-link" to="/locations">
              <li className="footer__content-nav-list-item">Locations</li>
            </Link>
            <Link className="footer__content-nav-list-link" to="/contact">
              <li className="footer__content-nav-list-item">Contact</li>
            </Link>
          </ul>
        </div>
        <div className="footer__content-contact-info">
          <div className="footer__content-contact-info-address">
            <p>Designo Central Office</p>
            <p>3886 Wellington Street</p>
            <p>Toronto, Ontario M9C 3J5</p>
          </div>
          <div className="footer__content-contact-info-phone">
            <p>Contact Us (Central Office)</p>
            <p>P : +1 253-863-8967</p>
            <p>M : contact@designo.co</p>
          </div>
          <div className="footer__content-contact-info-logo-list">
            <img src={facebook} />
            <img src={youtube} />
            <img src={twitter} />
            <img src={pinterest} />
            <img src={instagram} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
