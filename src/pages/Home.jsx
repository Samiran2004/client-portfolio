import React from "react";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection"; // Import AboutSection

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection /> {/* Add AboutSection here */}
    </>
  );
};

export default Home;