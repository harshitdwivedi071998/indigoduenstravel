import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Fleet from "../pages/Fleet";
import Services from "../pages/Services";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ScrollToTop from "../components/ScrollToTop";

function Dummy() {
  return (
    <div className="pt-40 text-center text-4xl">
      Coming Soon
    </div>
  );
}

export default function AppRoutes() {
  return (
    <>
     <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fleet" element={<Fleet />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  );
}