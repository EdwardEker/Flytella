import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logoFlytt.png";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link to="/" className="logo">
            <img src={Logo} alt="" />
          </Link>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            consequatur molestias saepe a sit iusto! Porro quam minima fugit
            consectetur quibusdam aut aperiam unde accusamus vel ad qui, rem
            neque.
          </p>
          <div className="footer__socials">
            <a
              href="https://www.facebook.com/Flyttella/?ref=page_internal"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/flyttella/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiFillInstagram />
            </a>
          </div>
        </article>
        <article>
          <h4>Sidkarta</h4>
          <Link to="/about">Hem</Link>
          <Link to="/about">Här finns vi</Link>
          <Link to="/about">Tjänster</Link>
          <Link to="/about">Om oss</Link>
          <Link to="/about">Blogg</Link>
          <Link to="/about">Kontakt</Link>
        </article>
        <article>
          <h4>Tjänster</h4>
          <Link to="/s">Bohagsflytt</Link>
          <Link to="/s">Ned & Upp packning</Link>
          <Link to="/s">Demontering & montering</Link>
          <Link to="/s">Flyttstädning</Link>
          <Link to="/s">Kontorsflytt</Link>
        </article>
        <article>
          <h4>Kontakt</h4>
          
        </article>
      </div>
      <div className="footer__copyright">
        <small>2022 Flyttella Flyttfirma &copy; Alla rättigheter förbehållna</small>
      </div>
    </footer>
  );
};

export default Footer;
