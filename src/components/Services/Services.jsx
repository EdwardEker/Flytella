import React from "react";
import "./ServicesStyles.css";
import { ServicesList } from "../../mocks/ServicesList";

const Services = () => {
  return (
    <div className="services">
      <h2>Våra Tjänster</h2>
      <div className="container">
        {ServicesList.map(({ id, image, title, subtitle }) => {
          return (
            <article key={id}>
              <div>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <p>{subtitle}</p>
              <div>
                <a href="">offert</a>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
