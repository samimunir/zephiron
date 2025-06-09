import { useTheme } from "../context/ThemeContext";

const testimonials = [
  {
    name: "Alex M.",
    service: "Stage 2 Tune + Ceramic Coating",
    quote:
      "Absolutely insane results. My car feels brand new — sleek, fast, and turns heads. TT Customs nailed it!",
  },
  {
    name: "Layla K.",
    service: "Interior Detailing + Ambient Lighting",
    quote:
      "I didn't expect the inside of my car to feel this premium. Their attention to detail is unreal.",
  },
  {
    name: "Jaspreet S.",
    service: "Full Wrap & Spoiler Kit",
    quote:
      "TT Customs transformed my car — the wrap is flawless and the service was top-tier. Highly recommend!",
  },
];

const TestimonialsSection = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const sectionBg = isDark ? "bg-zinc-950" : "bg-gray-50";
  const cardBg = isDark ? "bg-zinc-800" : "bg-white";
  const textColor = isDark ? "text-white" : "text-black";
  const subColor = isDark ? "text-gray-300" : "text-gray-600";

  return (
    <section className={`w-full py-20 px-6 ${sectionBg}`}>
      <div className="max-w-7xl mx-auto">
        <h2
          className={`text-3xl md:text-4xl font-extrabold mb-10 ${textColor}`}
        >
          What Our Customers Say
        </h2>

        <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-2">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className={`min-w-[280px] md:min-w-[320px] p-6 rounded-xl shadow-md ${cardBg} flex flex-col gap-4`}
            >
              <div className="text-lg font-semibold">{t.name}</div>
              <div className={`text-sm italic ${subColor}`}>{t.service}</div>
              <p className={`text-base ${textColor}`}>"{t.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
