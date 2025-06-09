import { useTheme } from "../context/ThemeContext";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const bg = isDark
    ? "bg-gradient-to-r from-zinc-900 to-zinc-800"
    : "bg-gradient-to-r from-gray-100 to-gray-50";
  const text = isDark ? "text-white" : "text-gray-900";

  return (
    <section className={`w-full py-20 px-6 ${bg}`}>
      <div className="max-w-7xl mx-auto text-center flex flex-col items-center gap-6">
        <h2 className={`text-3xl md:text-4xl font-extrabold ${text}`}>
          Ready to Elevate Your Ride?
        </h2>
        <p className={`text-base md:text-lg max-w-xl ${text}`}>
          Whether you're looking for raw performance, head-turning visuals, or
          ultimate detailing — TT Customs has your back.
        </p>
        <a
          href="/bookings"
          className="mt-4 inline-flex items-center gap-2 px-6 py-3 text-white bg-red-600 hover:bg-red-700 transition rounded-full text-sm font-semibold shadow-md"
        >
          Book a Service <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

export default CTASection;
