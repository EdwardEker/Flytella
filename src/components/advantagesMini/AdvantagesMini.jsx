import React from "react";
import Card from "../../UI/card/Card";
import AdvantagesListMini from "../../mocks/AdvantagesListMini";

const AdvantagesMini = () => {
  return (
    <section className="advantages-mini">
      <div className="container advantges-mini__container">
        <div className="advantages-mini__wrapper">
          {AdvantagesListMini.map(({ id, icon, title }) => {
            return (
              <Card className="advantages-mini__advantage" key={id}>
                <span>{icon}</span>
                <h4>{title}</h4>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesMini;
