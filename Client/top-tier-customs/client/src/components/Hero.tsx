import { ArrowRight } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

const Hero = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const bgColor = isDark ? "bg-zinc-900 text-white" : "bg-white text-black";
  const overlayColor = isDark ? "bg-black/50" : "bg-white/60";

  return (
    <section
      className={`relative w-full h-[calc(100vh-72px)] grid grid-cols-1 md:grid-cols-2 ${bgColor}`}
    >
      {/* Left Background Image */}
      <div className="relative h-full">
        <div className="absolute inset-0 bg-[url('/images/hero-left.jpg')] bg-cover bg-center" />
        <div className={`absolute inset-0 ${overlayColor}`} />
      </div>

      {/* Right Background Image */}
      <div className="relative h-full">
        <div className="absolute inset-0 bg-[url('/images/hero-right.jpg')] bg-cover bg-center" />
        <div className={`absolute inset-0 ${overlayColor}`} />
      </div>

      {/* Animated Floating Content */}
      <motion.div
        className="absolute inset-0 z-10 flex items-center justify-center p-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="max-w-2xl text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide leading-tight">
            Customize. Dominate. Drive.
          </h1>
          <p className="text-base md:text-lg opacity-80 max-w-md mx-auto">
            Top-tier mods. Legendary performance. Built for your passion.
          </p>
          <a
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-600 text-white font-semibold text-sm hover:bg-red-700 transition"
          >
            Book a Service
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
