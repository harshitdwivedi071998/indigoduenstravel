import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}

      <section className="pt-36 pb-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About Royal Desert Rides
          </h1>

          <p className="max-w-3xl mx-auto text-xl text-gray-300">
            Your trusted transportation partner for exploring
            Rajasthan in comfort, safety, and style.
          </p>

        </div>
      </section>

      {/* Company Story */}

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                alt="Rajasthan Travel"
                className="rounded-2xl shadow-xl"
              />
            </div>

            <div>

              <h2 className="text-4xl font-bold mb-6">
                Our Story
              </h2>

              <p className="text-gray-600 leading-8 mb-5">
                Royal Desert Rides was founded with a simple
                mission — to provide reliable, comfortable,
                and professional transportation services
                for travelers visiting Rajasthan.
              </p>

              <p className="text-gray-600 leading-8 mb-5">
                Over the last decade, we have helped
                thousands of domestic and international
                tourists explore the rich culture, heritage,
                and beauty of Rajasthan.
              </p>

              <p className="text-gray-600 leading-8">
                Whether it is an airport transfer,
                sightseeing tour, business trip, or
                customized travel plan, our team is committed
                to delivering an exceptional travel experience.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* Stats */}

      <section className="py-24 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">

            <div className="text-center">
              <h3 className="text-5xl font-bold text-[#D4A017] mb-2">
                10+
              </h3>
              <p className="text-gray-600">
                Years Experience
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-5xl font-bold text-[#D4A017] mb-2">
                5000+
              </h3>
              <p className="text-gray-600">
                Happy Travelers
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-5xl font-bold text-[#D4A017] mb-2">
                50+
              </h3>
              <p className="text-gray-600">
                Tour Routes
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-5xl font-bold text-[#D4A017] mb-2">
                24/7
              </h3>
              <p className="text-gray-600">
                Customer Support
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Mission & Vision */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-10">

            <div className="bg-white rounded-2xl shadow-lg p-10">

              <h3 className="text-3xl font-bold mb-6">
                Our Mission
              </h3>

              <p className="text-gray-600 leading-8">
                To provide safe, reliable, and premium
                transportation services while ensuring
                every traveler enjoys a comfortable and
                memorable journey across Rajasthan.
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-10">

              <h3 className="text-3xl font-bold mb-6">
                Our Vision
              </h3>

              <p className="text-gray-600 leading-8">
                To become Rajasthan's most trusted
                transportation company recognized for
                service excellence, customer satisfaction,
                and travel innovation.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Why Choose Us */}

      <section className="py-24 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-4xl font-bold mb-4">
              Why Travelers Choose Us
            </h2>

            <p className="text-gray-600">
              Trusted by thousands of visitors every year.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="font-bold text-xl mb-4">
                Experienced Drivers
              </h3>

              <p className="text-gray-600">
                Professional chauffeurs with local expertise.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="font-bold text-xl mb-4">
                Comfortable Fleet
              </h3>

              <p className="text-gray-600">
                Clean, modern, and regularly maintained vehicles.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="font-bold text-xl mb-4">
                Flexible Travel Plans
              </h3>

              <p className="text-gray-600">
                Customized transportation solutions for every traveler.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="font-bold text-xl mb-4">
                24/7 Support
              </h3>

              <p className="text-gray-600">
                Dedicated assistance whenever you need help.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-24 bg-[#0F172A] text-white">

        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold mb-6">
            Start Your Rajasthan Journey Today
          </h2>

          <p className="text-xl text-gray-300 mb-8">
            Travel comfortably with trusted drivers,
            premium vehicles, and personalized service.
          </p>

          <button className="bg-[#D4A017] px-8 py-4 rounded-xl font-semibold">
            Contact Us
          </button>

        </div>

      </section>

      <Footer />
    </>
  );
}