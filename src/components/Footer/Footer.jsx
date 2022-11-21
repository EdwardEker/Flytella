import React from "react";
import { BsFillArrowUpCircleFill, BsBoxSeam } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { FiInstagram, FiFacebook } from "react-icons/fi";
import "./FooterStyles.css";

import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="logo-footer">
            <BsBoxSeam className="icon" />
            <h2>Flyttela</h2>
          </div>
          <Link
            activeClass="active"
            to="top"
            spy={true}
            smooth={true}
            duration={500}
          >
            <BsFillArrowUpCircleFill className="icon" />
          </Link>
        </div>
        <div className="col-container">
          <div className="col">
            <h3>Sidkarta</h3>
            <p>Hem</p>
            <p>Här finns vi</p>
            <p>Tjänster</p>
            <p>Om oss</p>
            <p>Blog</p>
          </div>
          <div className="col">
            <h3>Tjänster</h3>
            <p>Bohagsflytt</p>
            <p>Ned & upp packning</p>
            <p>Demontering & montering</p>
            <p>Flyttstädning</p>
            <p>Kontorsflytt</p>
          </div>
          <div className="col">
            <h3>Öppettider</h3>
            <p>Mån - Fre: 08:00 - 18:00</p>
            <p>Lör: Stängt</p>
            <p>Sön: Stängt</p>
          </div>
          <div className="col">
            <h3>Kontakt</h3>
            <p>info@flyttella.se</p>
            <p>076 898 68 88</p>
            <p>Folkskolegatan 32, Stockholm, Sverige</p>
          </div>
          <form>
            <h3>Bli uppringd</h3>
            <input type="email" placeholder="Enter your E-mail" />
            <FiMail className="mail-icon" />
            <div className="social-group">
              <FiInstagram className="social-icon" />
              <FiFacebook className="social-icon" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
