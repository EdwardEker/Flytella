import React from "react";

const HeaderPage = ({ title, image, video, children }) => {
  return (
    <header className="header-page">
      <div className="header-page__container">
        <div className="header-page__container-bg">
          <img src={image} alt="Header background Image" />
          <video src={video} loop muted autoPlay />
        </div>
        <div className="header-page__content">
          <h2>{title}</h2>
          <p>{children}</p>
        </div>
      </div>
    </header>
  );
};

export default HeaderPage;
