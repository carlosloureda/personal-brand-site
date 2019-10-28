import React from "react";

import HomeBanner from "../HomeBanner/HomeBanner";
import Services from "../Services/Services";
import Jobs from "../Jobs/Jobs";
import Projects from "../Projects/Projects";
import Reviews from "../Reviews/Reviews";
import Footer from "../Footer/Footer";
import ScrollButton from "../ScrollButton";

const HomePage = () => {
  //   return <h1>HomePAge</h1>;
  return (
    <>
      <HomeBanner />
      <Services />
      <Jobs />
      <Projects />
      <Reviews />
      <Footer />
      <ScrollButton scrollStepInPx="50" delayInMs="16.66" />
    </>
  );
};

export default HomePage;
