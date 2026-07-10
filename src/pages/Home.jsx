import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import FleetSection from "../components/FleetSection";
import ServicesSection from "../components/ServicesSection";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import HeroSlider from "../components/HeroSlider";
import StatsSection from "../components/StatsSection";
import DestinationsSection from "../components/DestinationsSection";
import CtaBanner from "../components/CtaBanner";
import FaqSection from "../components/FaqSection";
import ContactPreview from "../components/ContactPreview";

export default function Home() {
  return (
    <>
      <Navbar />

      <HeroSlider/>

      <StatsSection/>

      {/* <Hero /> */}

      <WhyChooseUs />

      <FleetSection />

      <DestinationsSection/>

      <ServicesSection />

      <Testimonials />

      <CtaBanner/>

      <FaqSection/>

      <ContactPreview/>

      <Footer />
    </>
  );
}