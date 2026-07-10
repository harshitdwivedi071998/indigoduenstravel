export default function FleetCard({ vehicle }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">

      <img
        src={vehicle.image}
        alt={vehicle.name}
        className="w-full h-64 object-cover"
      />

      <div className="p-6">

        <div className="mb-2">
          <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
            {vehicle.category}
          </span>
        </div>

        <h3 className="text-2xl font-bold mb-3">
          {vehicle.name}
        </h3>

        <p className="text-gray-600 mb-5">
          {vehicle.description}
        </p>

        <div className="grid grid-cols-3 gap-4 mb-6 text-center">

          <div>
            <p className="font-bold">{vehicle.seats}</p>
            <p className="text-sm text-gray-500">
              Seats
            </p>
          </div>

          <div>
            <p className="font-bold">{vehicle.luggage}</p>
            <p className="text-sm text-gray-500">
              Luggage
            </p>
          </div>

          <div>
            <p className="font-bold">
              {vehicle.transmission}
            </p>

            <p className="text-sm text-gray-500">
              Gear
            </p>
          </div>

        </div>

        <button className="w-full bg-[#D4A017] text-white py-3 rounded-xl font-semibold hover:bg-yellow-700 transition">
          Send Inquiry
        </button>

      </div>
    </div>
  );
}