import testimonialsData from "../data/testimonialsData";

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          What Our Clients Say
        </h2>

        <p className="text-center text-gray-600 mb-14">
          Trusted by travelers from around the world.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white shadow-lg rounded-xl p-8"
            >
              <div className="text-yellow-500 text-xl mb-4">
                ★★★★★
              </div>

              <p className="text-gray-600 italic mb-6">
                "{testimonial.review}"
              </p>

              <h4 className="font-semibold">
                {testimonial.name}
              </h4>

              <p className="text-sm text-gray-500">
                {testimonial.country}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}