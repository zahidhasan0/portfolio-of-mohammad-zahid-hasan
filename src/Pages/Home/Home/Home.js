import React from "react";
import Banner from "../Banner/Banner";
import Contactme from "../Contact/Contactme";
import Projects from "../Projects/Projects";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Projects />
      <Contactme />
    </div>
  );
};

export default Home;
