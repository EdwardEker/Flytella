import React from "react";
import { FcServices } from "react-icons/fc";
import SectionHeader from "../sectionHeader/SectionHeader";
import ServicesList from "../../mocks/ServicesList";
import Card from "../../UI/card/Card";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const ServicesMain = () => {
  return (
    <section className="services-main">
      <div className="container services-main__container">
        <SectionHeader icon={<FcServices />} title="Våra tjänster" />

        <div className="services-main__wrapper">
          {ServicesList.map(({ id, icon, title, info, path }) => {
            return (
              <Card className="services-main__service" key={id}>
                <span>{icon}</span>
                <h4>{title}</h4>
                <small>{info}</small>
                <Link to={path} className="btn sm">
                  Learn More <AiOutlineArrowRight />
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesMain;
