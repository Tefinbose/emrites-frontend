import Hero from "../Components/Hero";
import StatsBar from "../Components/StatsBar";
import AboutSection from "../Components/AboutSection";
import ContactSection from "../Components/ContactSection";
import ServicesPreview from "../Components/ServicesPreview";
import ClientReview from "../Components/ClientReview";
import Footer from "../Components/Footer";






const Home = () => {
  return (
    <>
      <Hero />
      <StatsBar />
      <AboutSection />
      <ContactSection />
      <ServicesPreview />
      <ClientReview/>
      <Footer/>
      
      
    </>
  );
};

export default Home;