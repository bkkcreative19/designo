import React from "react";
import Hero from "../../components/Hero/Hero";
import HomeProjects from "../../components/HomeProjects/HomeProjects";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <HomeProjects />
    </div>
  );
};

export default Home;
