import React from "react";
import { BsBoxSeam } from "react-icons/bs";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="logo-footer">
          <BsBoxSeam className="icon" />
          <h2>Flyttela</h2>
        </div>
        <BsFillArrowUpCircleFill className="icon" />
      </div>
      <div className="col-container">
        <div className="col">
          <h3>Navigation</h3>
          <p>Hem</p>
          <p>Här finns vi</p>
          <p>Tjänster</p>
          <p>Om oss</p>
          <p>Blog</p>
        </div>
        <div className="col">
          <h3>Information</h3>
          <p>Hem</p>
          <p>Här finns vi</p>
          <p>Tjänster</p>
          <p>Om oss</p>
          <p>Blog</p>
        </div>
        <div className="col">
          <h3>legal</h3>
          <p>Hem</p>
          <p>Här finns vi</p>
          <p>Tjänster</p>
          <p>Om oss</p>
          <p>Blog</p>
        </div>
        <div className="col">
          <h3>Navigation</h3>
          <p>Hem</p>
          <p>Här finns vi</p>
          <p>Tjänster</p>
          <p>Om oss</p>
          <p>Blog</p>
        </div>
        <form>
          <h3>Bli uppringd</h3>
          <input type="text" placeholder="Förnamn" />
          <input type="text" placeholder="Efternamn" />
          <input type="text" placeholder="E-post" />
          <input type="text" placeholder="Telefon" />
        </form>
      </div>
    </div>
  );
};

export default Footer;
