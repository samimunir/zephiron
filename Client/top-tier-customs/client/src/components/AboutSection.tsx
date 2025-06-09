import { useTheme } from "../context/ThemeContext";
import { ShieldCheck, ShoppingCart, Wrench } from "lucide-react";

const AboutSection = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const bgColor = isDark ? "bg-zinc-900" : "bg-white";
  const textColor = isDark ? "text-white" : "text-black";
  const subTextColor = isDark ? "text-gray-300" : "text-gray-600";

  return (
    <section className={`w-full py-20 px-6 ${bgColor} ${textColor}`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Why Top-Tier Customs?
          </h2>
          <p className={`text-base md:text-lg ${subTextColor}`}>
            TT Customs is your one-stop shop for premium automotive
            modifications and performance services. Whether you're looking to
            upgrade your car's look, feel, or power — we've got the tools, team,
            and tech to make it happen.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-6 h-6 text-red-600" />
              <span className="font-medium">
                Trusted by performance enthusiasts across the UK
              </span>
            </div>
            <div className="flex items-start gap-3">
              <Wrench className="w-6 h-6 text-red-600" />
              <span className="font-medium">
                Expert services like detailing, tuning, wraps, & more
              </span>
            </div>
            <div className="flex items-start gap-3">
              <ShoppingCart className="w-6 h-6 text-red-600" />
              <span className="font-medium">
                Quality products shipped directly to your door
              </span>
            </div>
          </div>
        </div>

        {/* Visual Placeholder (swap with image or graphic later) */}
        <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-red-600 to-blue-500 flex items-center justify-center text-white text-2xl font-bold uppercase tracking-wider">
          TT Customs
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
