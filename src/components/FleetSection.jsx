import { Link } from "react-router-dom";
import fleetData from "../data/fleetData";

export default function FleetSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          Our Premium Fleet
        </h2>

        <p className="text-center text-gray-600 mb-14 max-w-3xl mx-auto">
          Travel comfortably with our carefully maintained fleet,
          suitable for families, groups, business travelers,
          and international tourists.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fleetData.map((vehicle) => (
            <div
              key={vehicle.id}
              className="rounded-xl overflow-hidden shadow-lg bg-white"
            >
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">
                  {vehicle.name}
                </h3>

                <p className="text-gray-600 mb-4">
                  {vehicle.seats}
                </p>

                <Link to="/contact" className="bg-yellow-600 text-white px-5 py-2 rounded-lg hover:bg-yellow-700">
                  Send Inquiry
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}