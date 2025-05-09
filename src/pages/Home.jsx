import React from "react";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection"; // Import AboutSection
import Education from "../components/education"; // Import Education

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <Education /> {/* Add Education here */}
    </>
  );
};

export default Home;