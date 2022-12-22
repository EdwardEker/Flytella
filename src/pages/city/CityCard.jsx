import React from "react";
import CityList from "../../mocks/CityList";

const CityCard = () => {
  return (
    <section className="city__card">
      <div className="container city__card__container">
        {CityList.map(({ id, image, title }) => {
          return (
            <article key={id} className="city__card-item">
              <div className="city__card-item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default CityCard;
