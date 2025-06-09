import { useTheme } from "../context/ThemeContext";

const sampleProducts = [
  { name: "Carbon Fiber Spoiler", price: "$299" },
  { name: "Performance Exhaust", price: "$799" },
  { name: "Cold Air Intake", price: "$249" },
];

const sampleServices = [
  { name: "Ceramic Coating", duration: "2–3 hrs" },
  { name: "Dyno Tuning", duration: "1.5 hrs" },
  { name: "Wrap Installation", duration: "4 hrs" },
];

const FeaturedShowcase = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const cardBg = isDark ? "bg-zinc-800" : "bg-white";
  const titleColor = isDark ? "text-white" : "text-black";

  return (
    <section className="w-full py-16 px-6 max-w-7xl mx-auto space-y-20">
      {/* Products */}
      <div>
        <h2 className={`text-2xl md:text-3xl font-bold mb-6 ${titleColor}`}>
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sampleProducts.map((item, index) => (
            <div
              key={index}
              className={`p-5 rounded-xl shadow-md ${cardBg} transition hover:scale-105`}
            >
              <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
              <p className="text-sm text-gray-400">{item.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <div>
        <h2 className={`text-2xl md:text-3xl font-bold mb-6 ${titleColor}`}>
          Featured Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sampleServices.map((item, index) => (
            <div
              key={index}
              className={`p-5 rounded-xl shadow-md ${cardBg} transition hover:scale-105`}
            >
              <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
              <p className="text-sm text-gray-400">Est. {item.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedShowcase;
