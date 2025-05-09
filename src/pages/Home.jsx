import React from "react";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection"; // Import AboutSection
import Education from "../components/education"; // Import Education
import TeachingSection from "../components/TeachingSection"; // Corrected import path

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <Education /> {/* Add Education here */}
      <TeachingSection /> {/* TeachingSection component */}
    </>
  );
};

export default Home;