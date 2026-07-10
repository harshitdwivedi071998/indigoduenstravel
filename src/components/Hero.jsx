export default function Hero() {
  return (
    <section
      className="h-screen bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee')",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Discover Rajasthan with Trusted Chauffeur Services
          </h1>

          <p className="text-lg md:text-xl mb-8">
            Premium chauffeur-driven transportation for domestic and
            international tourists across Rajasthan.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-yellow-600 px-8 py-4 rounded-lg font-semibold">
              Book Your Ride
            </button>

            <button className="border border-white px-8 py-4 rounded-lg font-semibold">
              Get Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}