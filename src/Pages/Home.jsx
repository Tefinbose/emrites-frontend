import Hero from "../Components/Hero";
import StatsBar from "../Components/StatsBar";
import AboutSection from "../Components/AboutSection";
import ContactSection from "../Components/ContactSection";
import ServicesPreview from "../Components/ServicesPreview";

const Home = () => {
  return (
    <>
      <Hero />
      <StatsBar />
      <AboutSection />
      <ContactSection />
      <ServicesPreview />
    </>
  );
};

export default Home;