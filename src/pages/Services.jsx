import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";

import servicesPageData from "../data/servicesPageData";

export default function Services() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}

      <section className="pt-36 pb-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Transportation Services
          </h1>

          <p className="max-w-3xl mx-auto text-xl text-gray-300">
            Reliable, comfortable, and professional travel
            solutions across Rajasthan for domestic and
            international tourists.
          </p>

        </div>
      </section>

      {/* Services Grid */}

      <section className="py-24 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-4xl font-bold mb-4">
              Our Core Services
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              Premium chauffeur-driven transportation
              services designed for every travel need.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {servicesPageData.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
              />
            ))}

          </div>

        </div>

      </section>

      {/* Why Choose Us */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-4xl font-bold mb-4">
              Why Travel With Us
            </h2>

            <p className="text-gray-600">
              Trusted transportation partner across Rajasthan.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="font-bold text-xl mb-3">
                Professional Drivers
              </h3>

              <p className="text-gray-600">
                Experienced chauffeurs ensuring safe and
                comfortable travel.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="font-bold text-xl mb-3">
                Premium Vehicles
              </h3>

              <p className="text-gray-600">
                Well-maintained vehicles equipped for
                comfort and reliability.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="font-bold text-xl mb-3">
                Transparent Pricing
              </h3>

              <p className="text-gray-600">
                Competitive pricing with no hidden charges.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="font-bold text-xl mb-3">
                24/7 Support
              </h3>

              <p className="text-gray-600">
                Dedicated customer support throughout your journey.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-24 bg-[#0F172A] text-white">

        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold mb-6">
            Ready To Plan Your Journey?
          </h2>

          <p className="text-xl text-gray-300 mb-8">
            Contact our team today and get a customized
            transportation solution for your trip.
          </p>

          <button className="bg-[#D4A017] px-8 py-4 rounded-xl font-semibold">
            Request Free Quote
          </button>

        </div>

      </section>

      <Footer />
    </>
  );
}