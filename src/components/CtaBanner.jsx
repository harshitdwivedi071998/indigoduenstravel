import { Link } from "react-router-dom";

export default function CtaBanner() {
  return (
    <section className="py-24 bg-[#0F172A] text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-bold mb-6">
          Ready To Explore Rajasthan?
        </h2>

        <p className="text-xl text-gray-300 mb-8">
          Book your ride today and travel with comfort,
          safety and professional chauffeur service.
        </p>

        <Link to={"/contact"} className="bg-[#D4A017] px-8 py-4 rounded-xl font-semibold">
          Request Free Quote
        </Link>

      </div>
    </section>
  );
}