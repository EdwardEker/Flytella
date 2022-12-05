import React from "react";
import advanImage from "../../assets/advanImage.jpg";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import { FcAbout } from "react-icons/fc";
import AdvantagesList from "../../mocks/AdvantagesList";
import Card from "../../UI/card/Card";

const Advantages = () => {
  return (
    <section className="advantages">
      <div className="container advantages__container">
        <div className="advantages__left">
          <div className="advantages__image">
            <img src={advanImage} alt="men" />
          </div>
        </div>
        <div className="advantages__right">
          <SectionHeader
            icon={<FcAbout />}
            title="Varför borde du välja oss?"
          />
          <p>
            Att flytta ska nämligen vara enkelt när man anlitar proffs! Vi på
            Flyttella har 10 års erfarenhet inom flytt branschen, varje vår
            offert är skräddarsydd just efter dina behov. Sedan Flyttella
            etablerades har vi varit erkänt för våra kvalitetstjänster,
            effektivitet och proffsighet. Oavsett vilken tjänst du söker,
            garanterar vi att vi inte bara uppfyller utan överträffar dina
            förväntningar och ser till att du blir nöjd. Vår team kan ta på sig
            projekt av alla slag med den resultat och professionalism som våra
            kunder förväntar sig. Du är varmt välkommen att kontakta oss för
            att få veta mer om oss och vårt tjänsteutbud.
          </p>
          <div className="advantages__wrapper">
            {AdvantagesList.map(({ id, icon, title, desc }) => {
              return (
                <Card key={id} className="advantages__advantage">
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{desc}</small>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
