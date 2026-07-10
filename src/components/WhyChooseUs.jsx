import {
  FaUserTie,
  FaPlaneArrival,
  FaCarSide,
  FaHeadset,
} from "react-icons/fa";

const features = [
  {
    icon: <FaUserTie size={40} />,
    title: "Professional Drivers",
    description:
      "Experienced, licensed, and courteous chauffeurs ensuring a safe journey.",
  },
  {
    icon: <FaPlaneArrival size={40} />,
    title: "Airport Transfers",
    description:
      "Timely pickup and drop services from major airports across Rajasthan.",
  },
  {
    icon: <FaCarSide size={40} />,
    title: "Premium Fleet",
    description: "Clean, comfortable, and regularly maintained vehicles.",
  },
  {
    icon: <FaHeadset size={40} />,
    title: "24/7 Support",
    description:
      "Dedicated assistance whenever you need transportation support.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">Why Choose Us</h2>

        <p className="text-center text-gray-600 mb-14 max-w-2xl mx-auto">
          We provide premium transportation services designed for comfort,
          reliability, and unforgettable travel experiences.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className=" group bg-white p-8 rounded-xl shadow hover:shadow-2xl hover:bg-linear-to-r hover:from-[#D4A017] hover:to-[#b8860b] transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-transparent hover:border-white/20"
            >
              <div className="text-yellow-600 mb-4 transition-all duration-300 group-hover:text-white">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3 duration-300 group-hover:text-white transition-all">{item.title}</h3>

              <p className="text-gray-600 transition-all duration-300 group-hover:text-white/90">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
