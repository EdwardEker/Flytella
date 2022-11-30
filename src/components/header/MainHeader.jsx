import React from "react";
import mainHeader from "../../assets/mainHeader.jpg";
import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#Flyttella</h4>
          <h1>
            Lugn! <br />
            Vi hjälper dig att
            <br /> FLYTTA!
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
            porro cumque itaque nostrum ullam culpa.
          </p>
          
          <Link to="/" className="btn lg">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Begär kostnadsfri offert
          </Link>

          {/* <Link to="/" className="btn lg">
            Begär kostnadsfri offert
          </Link> */}
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={mainHeader} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
