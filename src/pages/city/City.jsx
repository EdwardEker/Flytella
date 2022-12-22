import React from "react";
import HeaderPage from "../../components/headerPage/HeaderPage";
import HeaderImage from "../../assets/background_2.jpg";
import "./CityStyles.css";
import CityMainInfo from "./CityMainInfo";
import CityCard from "./CityCard";

const City = () => {
  return (
    <>
      <HeaderPage title="Här finns vi" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae
        debitis commodi praesentium molestiae! Possimus error necessitatibus
        perferendis neque blanditiis aperiam vel doloremque, officia ad optio
        quo in odit, magnam eaque!
      </HeaderPage>
      <section className="city">
        <CityMainInfo />
        <CityCard />
      </section>
    </>
  );
};

export default City;
