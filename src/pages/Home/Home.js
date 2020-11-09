import React from "react";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import Hero from "../../components/Hero/Hero";
import HomeProjects from "../../components/HomeProjects/HomeProjects";
import Services from "../../components/Services/Services";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <HomeProjects />
      <Services />
      <GetInTouch />
    </div>
  );
};

export default Home;
