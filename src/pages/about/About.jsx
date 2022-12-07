import React from "react";
import HeaderPage from "../../components/headerPage/HeaderPage";
import HeaderImage from "../../assets/background_1.jpg";
import StoryImage from "../../assets/about_1.jpg";
import "./About.css";

const About = () => {
  return (
    <>
      <HeaderPage title="Om oss" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aut iusto
        cumque commodi eius incidunt doloremque ipsam obcaecati, animi sint
        excepturi distinctio? Impedit architecto, corrupti qui non reprehenderit
        fuga ab.
      </HeaderPage>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="" />
          </div>
          <div className="about__section-content">
            <h1>KORT OM OSS</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,
              tempora quis reiciendis sed officia porro voluptatum totam ducimus
              perspiciatis. Laborum debitis suscipit asperiores eveniet, sit at
              vel? Repellendus, adipisci ipsum!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Blanditiis at atque tempora deleniti nulla quas voluptates error
              dolores delectus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              accusantium possimus totam quo, ducimus perferendis illum numquam
              omnis.
            </p>
          </div>
        </div>
      </section>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="" />
          </div>
          <div className="about__section-content">
            <h1>KORT OM OSS</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,
              tempora quis reiciendis sed officia porro voluptatum totam ducimus
              perspiciatis. Laborum debitis suscipit asperiores eveniet, sit at
              vel? Repellendus, adipisci ipsum!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Blanditiis at atque tempora deleniti nulla quas voluptates error
              dolores delectus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              accusantium possimus totam quo, ducimus perferendis illum numquam
              omnis.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
