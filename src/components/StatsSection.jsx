import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { FaUsers, FaCarSide, FaRoute, FaHeadset } from "react-icons/fa";

const stats = [
  {
    icon: <FaUsers size={40} />,
    value: 5000,
    suffix: "+",
    label: "Happy Travelers",
  },
  {
    icon: <FaCarSide size={40} />,
    value: 50,
    suffix: "+",
    label: "Premium Vehicles",
  },
  {
    icon: <FaRoute size={40} />,
    value: 50,
    suffix: "+",
    label: "Tour Routes",
  },
  {
    icon: <FaHeadset size={40} />,
    value: "24/7",
    label: "Customer Support",
    static: true,
  },
];

export default function StatsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <section
      ref={ref}
      className="bg-slate-900 text-white py-20"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">

          {stats.map((item, index) => (
            <div
              key={index}
              className="text-center"
            >
              <div className="text-[#D4A017] flex justify-center mb-4">
                {item.icon}
              </div>

              <h3 className="text-4xl font-bold mb-2">

                {item.static ? (
                  item.value
                ) : (
                  <>
                    {inView ? (
                      <AnimatedNumber end={item.value} />
                    ) : (
                      0
                    )}
                    {item.suffix}
                  </>
                )}

              </h3>

              <p className="text-gray-300">
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

function AnimatedNumber({ end }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;

    const duration = 2000;
    const steps = 100;
    const increment = end / steps;

    const timer = setInterval(() => {
      current += increment;

      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [end]);

  return <>{count.toLocaleString()}</>;
}