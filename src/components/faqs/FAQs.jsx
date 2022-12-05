import React from "react";
import SectionHeader from "../sectionHeader/SectionHeader";
import FAQsList from "../../mocks/FAQsList";
import FAQ from "../faq/FAQ";
import { FaQuestion } from "react-icons/fa";

const FAQs = () => {
  return (
    <section className="faqs">
      <div className="container faqs__container">
        <SectionHeader icon={<FaQuestion/>} title="Råd & tips" />
        <div className="faqs__wrapper">
          {FAQsList.map(({ id, question, answer }) => {
            return <FAQ key={id} question={question} answer={answer} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
