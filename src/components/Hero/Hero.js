import React from "react";
import Button from "../Button/Button";
import phone from "../../assets/home/desktop/image-hero-phone.png";

import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero container">
      <div className="hero__content">
        <div className="hero__content-text">
          <h1>Award-winning custom designs and digital branding solutions</h1>
          <p>
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <Button text="Learn more" color="#333136" bgColor="#FFFFFF" />
          <img className="phone" src={phone} />
        </div>
        {/* <div className="hero__phone-bg"></div> */}
      </div>
    </section>
  );
};

export default Hero;
