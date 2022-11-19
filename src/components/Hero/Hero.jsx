import React from "react";
import "./HeroStyles.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="content">
          <h1>Lugn!</h1>
          <h1 className="blue">Vi hjälper dug att</h1>
          <h1>FLYTTA!</h1>
          <div>
            <button>Begär kostnadsfri offert</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
