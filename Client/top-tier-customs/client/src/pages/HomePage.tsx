import { ArrowRight } from "lucide-react";

const HomePage = () => {
  return (
    <section className="relative w-full min-h-[85vh] bg-gradient-to-b from-zinc-900 to-black text-white flex items-center justify-center px-6">
      <div className="max-w-4xl text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-wide leading-tight">
          Redefine Your Ride
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto">
          Experience premium modifications, performance upgrades, and custom
          styling — all in one place.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="/services"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold text-sm flex items-center gap-2 transition"
          >
            Book a Service
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="/products"
            className="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-full font-semibold text-sm transition"
          >
            Browse Products
          </a>
        </div>
      </div>

      {/* Optional background image overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('/hero-overlay.jpg')] bg-cover bg-center pointer-events-none" />
    </section>
  );
};

export default HomePage;
