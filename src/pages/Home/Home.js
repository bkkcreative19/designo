import React from "react";
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
    </div>
  );
};

export default Home;
