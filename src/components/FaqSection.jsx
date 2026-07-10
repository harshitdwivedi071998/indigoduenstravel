import { useState } from "react";

const faqData = [
  {
    question: "Do you provide airport pickup and drop services?",
    answer:
      "Yes, we provide reliable airport transfer services across Rajasthan.",
  },
  {
    question: "Are professional drivers included?",
    answer:
      "Yes, all our vehicles come with experienced professional chauffeurs.",
  },
  {
    question: "Can I book vehicles for multiple days?",
    answer:
      "Absolutely. We offer flexible travel plans for multi-day journeys.",
  },
  {
    question: "Do you serve international tourists?",
    answer:
      "Yes, we regularly assist travelers from around the world.",
  },
  {
    question: "Can you customize travel itineraries?",
    answer:
      "Yes, we offer personalized transportation plans based on your travel needs.",
  },
];

export default function FaqSection() {
  const [active, setActive] = useState(null);

  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        {faqData.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl mb-4 overflow-hidden"
          >
            <button
              onClick={() =>
                setActive(active === index ? null : index)
              }
              className="w-full text-left p-5 font-semibold flex justify-between"
            >
              {item.question}

              <span>
                {active === index ? "-" : "+"}
              </span>
            </button>

            {active === index && (
              <div className="p-5 bg-slate-50">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}