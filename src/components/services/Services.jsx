import React from "react";
import { FcServices } from "react-icons/fc";
import SectionHeader from "../sectionHeader/SectionHeader";
import ServicesList from "../../mocks/ServicesList";
import Card from "../../UI/card/Card";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const Services = () => {
  return (
    <section className="services">
      <div className="container services__container">
        <SectionHeader icon={<FcServices />} title="Våra tjänster" />

        <div className="services__wrapper">
          {ServicesList.map(({ id, icon, title, info, path }) => {
            return (
              <Card className="services__service" key={id}>
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

export default Services;
