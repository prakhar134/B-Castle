import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaGooglePlus,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import logo from "../../static/icons/LOGO.png";

const Footer = () => {
  return (
    <div className="footer" id="contact">
      <div className="footer__logo">
        <img alt="" className="logo" src={logo} height="70px" width="70px" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris
        </p>
      </div>
      <div className="footer__resources">
        <p>Resources</p>
        <div className="footer__resources__list">
          <p>How to Buy Coin</p>
          <p>Coin Overview</p>
          <p> Blog News</p>
          <p>How to Sell Coin</p>
          <p>Purchase Theme</p>
        </div>
      </div>
      <div className="footer__quickLinks">
        <p>Quick Links</p>
        <div className="footer__quickLinks__list">
          <p>Network Stats</p>
          <p>Block Explorers</p>
          <p>Governance</p>
          <p>Exchange Markets</p>
          <p>Get theme</p>
        </div>
      </div>
      <div className="footer__followUs">
        <p>Follow Us</p>
        <div className="footer__followUs__icons">
          <FaFacebook className="facebookIcon" />
          <FaGooglePlus className="googlePlusIcon" />
          <FaInstagram className="instagramIcon" />
          <FaTwitter className="twitterIcon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
