import { useState } from "react";
import fleetData from "../data/fleetData";
import FleetCard from "../components/FleetCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FadeUp from "../components/FadeUp";

export default function Fleet() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredVehicles = fleetData.filter(
    (vehicle) =>
      vehicle.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || vehicle.category === category),
  );

  return (
    <>
      <Navbar />

      <section className="pt-36 pb-20 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">Our Premium Fleet</h1>

            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our range of vehicles designed for comfortable travel
              across Rajasthan.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg mb-10">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Search Vehicle..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border p-3 rounded-xl"
              />

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="border p-3 rounded-xl"
              >
                <option>All</option>
                <option>SUV</option>
                <option>Luxury</option>
                <option>Group</option>
                <option>Sedan</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVehicles.map((vehicle) => (
              <FadeUp>
              <FleetCard key={vehicle.id} vehicle={vehicle} />
              </FadeUp>
            ))}
          </div>

          {filteredVehicles.length === 0 && (
            <div className="text-center mt-20">
              <h3 className="text-2xl font-semibold">No Vehicle Found</h3>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
