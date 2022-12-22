import React from "react";
import { FcAbout } from "react-icons/fc";
import { Link } from "react-router-dom";
import advanImage from "../../assets/advanImage.jpg";
import SectionHeader from "../../components/sectionHeader/SectionHeader";

const CityMainInfo = () => {
  return (
    <section className="city__info">
      <div className="container city__info__container">
        <div className="city__info-left">
          <div className="city__info-image">
            <img src={advanImage} alt="men" />
          </div>
        </div>
        <div className="city__info-right">
          <SectionHeader icon={<FcAbout />} title="Flytthjälp" />
          <h3>
            Lång erfarenhet & Stor kapacitet
            <br /> Nöjda kunder & Goda omdömen
            <br /> Sedan 2020
          </h3>
          <p>
            Flyttella är helhetsleverantör i flyttbranschen. Tack vare vår lång
            erfarenhet, behöriga medarbetare har vi lyckats utveckla fram en
            strategi modell som gör oss mest prisvärda och mest kvalitativa.
            Sedan vi etablerades har vi alltid haft kunden i fokus. Oavsett
            vilken tjänst du söker garanterar vi att vi inte bara uppfyller,
            utan överträffar, dina förväntningar! Vi ser fram emot att
            underlätta din vardag!
          </p>
          <Link to='/' className="btn lg">
          Begär kostnadsfri offert
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CityMainInfo;
