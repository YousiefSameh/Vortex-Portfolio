import Footer from "@components/Footer";
import Hero from "@components/Hero";
import Navbar from "@components/Navbar";
import Particles from "@tsparticles/react";

const MainLayouts = () => {
  return (
    <div>
      <Particles />
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default MainLayouts;
