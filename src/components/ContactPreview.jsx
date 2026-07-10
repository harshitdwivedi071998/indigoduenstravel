import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function ContactPreview() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16">

          <div>
            <h2 className="text-4xl font-bold mb-6">
              Let's Plan Your Journey
            </h2>

            <p className="text-gray-600 mb-8">
              Contact us today for premium chauffeur
              services, airport transfers and customized
              travel solutions across Rajasthan.
            </p>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <FaPhoneAlt />
                <span>+917023280401</span>
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelope />
                <span>
                  indigodunestravel@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt />
                <span>
                  Jodhpur, Rajasthan, India
                </span>
              </div>

            </div>
          </div>

          <form className="bg-white p-8 rounded-2xl shadow-xl">

            <h3 className="text-2xl font-semibold mb-6">
              Quick Inquiry
            </h3>

            <div className="space-y-4">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border p-3 rounded-lg"
              />

              <input
                type="text"
                placeholder="Email Address"
                className="w-full border p-3 rounded-lg"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border p-3 rounded-lg"
              />

              <input
                type="text"
                placeholder="Country"
                className="w-full border p-3 rounded-lg"
              />

              <input
                type="text"
                placeholder="Pickup Location"
                className="w-full border p-3 rounded-lg"
              />

              <input
                type="text"
                placeholder="Drop Location"
                className="w-full border p-3 rounded-lg"
              />

              <input
                type="date"
                className="w-full border p-3 rounded-lg"
              />

              <select className="w-full border p-3 rounded-lg">
                <option>Select Vehicle</option>
                <option>Innova Crysta</option>
                <option>Tempo Traveller</option>
                <option>Luxury SUV</option>
              </select>

              <textarea
                rows="4"
                placeholder="Travel Requirement"
                className="w-full border p-3 rounded-lg"
              />

              <button
                type="submit"
                className="w-full bg-[#D4A017] text-white py-3 rounded-lg font-semibold"
              >
                Get Free Quote
              </button>

            </div>
          </form>

        </div>

      </div>
    </section>
  );
}