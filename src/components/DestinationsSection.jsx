const destinations = [
  {
    name: "Jodhpur",
    image:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41",
    description: "The Blue City",
  },
  {
    name: "Jaipur",
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245",
    description: "The Pink City",
  },
  {
    name: "Udaipur",
    image:
      "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16",
    description: "City of Lakes",
  },
  {
    name: "Jaisalmer",
    image:
      "https://images.unsplash.com/photo-1593693411515-c20261bcad6e",
    description: "Golden Desert",
  },
  {
    name: "Mount Abu",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    description: "Hill Station Escape",
  },
  {
    name: "Pushkar",
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963",
    description: "Spiritual Destination",
  },
];

export default function DestinationsSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          Popular Destinations
        </h2>

        <p className="text-center text-gray-600 mb-14">
          Explore Rajasthan's most loved travel destinations.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((item, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl shadow-xl bg-white"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-72 w-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">
                  {item.name}
                </h3>

                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}