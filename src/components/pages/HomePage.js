import React from "react";

import HomeBanner from "../HomeBanner/HomeBanner";
import Footer from "../Footer/Footer";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";

const HomePage = () => {
  //   return <h1>HomePAge</h1>;
  return (
    <>
      <HomeBanner />
      <Services />
      <Projects />
      <Footer />
    </>
  );
};

export default HomePage;
