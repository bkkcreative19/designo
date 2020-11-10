import React from "react";
import passionate from "../../assets/home/desktop/illustration-passionate.svg";
import resourceful from "../../assets/home/desktop/illustration-resourceful.svg";
import friendly from "../../assets/home/desktop/illustration-friendly.svg";
import "./Services.scss";

const Services = () => {
  return (
    <section className="services container">
      <div className="services__item passionate">
        <div className="services__item-img-container">
          <img src={passionate} />
        </div>

        <div className="services__item-text">
          <h2>Passionate</h2>
          <p>
            Each project starts with an in-depth brand research to ensure we
            only create products that serve a purpose. We merge art, design, and
            technology into exciting new solutions.
          </p>
        </div>
      </div>
      <div className="services__item resourceful">
        <div className="services__item-img-container">
          <img src={resourceful} />
        </div>

        <div className="services__item-text">
          <h2>Resourceful</h2>
          <p>
            Everything that we do has a strategic purpose. We use an agile
            approach in all of our projects and value customer collaboration. It
            guarantees superior results that fulfill our clients’ needs.
          </p>
        </div>
      </div>
      <div className="services__item friendly">
        <div className="services__item-img-container">
          <img src={friendly} />
        </div>

        <div className="services__item-text">
          <h2>Friendly</h2>
          <p>
            We are a group of enthusiastic folks who know how to put people
            first. Our success depends on our customers, and we strive to give
            them the best experience a company can provide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
