import React from "react";

import HomeBanner from "../HomeBanner/HomeBanner";
import Services from "../Services/Services";
import Jobs from "../Jobs/Jobs";
import Projects from "../Projects/Projects";
import Features from "../Features/Features";
import Footer from "../Footer/Footer";

const HomePage = () => {
  //   return <h1>HomePAge</h1>;
  return (
    <>
      <HomeBanner />
      <Services />
      <Jobs />
      <Projects />
      <Features />
      <Footer />
    </>
  );
};

export default HomePage;
