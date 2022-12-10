import React from "react";
import HeaderPage from "../../components/headerPage/HeaderPage";
import HeaderImage from "../../assets/background_3.jpg";
import ServicesList from "../../mocks/ServicesList";
import Card from "../../UI/card/Card";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <HeaderPage title="Tjanste" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta corrupti
        at fugiat reprehenderit. Placeat aliquam, fuga minus quibusdam sequi
        possimus molestias? Culpa, provident porro adipisci sunt ullam
        asperiores? Culpa, inventore?
      </HeaderPage>

      <section className="services">
        <div className="container services__container">
          <div className="services__wrapper">
            {ServicesList.map(({ id, icon, title, info, path }) => {
              return (
                <Card className="services__service" key={id}>
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{info}</small>
                  <Link to={path} className="btn sm">
                    Learn more
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
