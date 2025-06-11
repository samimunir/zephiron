import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

const AboutPage = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <main
      className={`pt-28 px-6 pb-16 min-h-screen transition-colors duration-300 ${
        isDark ? "bg-zinc-950 text-white" : "bg-white text-zinc-900"
      }`}
    >
      <section className="max-w-6xl mx-auto text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-4"
        >
          About TT Customs
        </motion.h1>
        <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
          At TT Customs, we specialize in top-tier automotive products and
          services that elevate both performance and aesthetics. Our mission is
          to deliver excellence — every build, every time.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            We're dedicated to providing the highest quality car mods,
            customizations, and accessories. Whether you're looking to boost
            performance or turn heads — we’re here to help you build your dream
            ride.
          </p>
          <h2 className="text-2xl font-semibold">Why Choose Us?</h2>
          <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-400">
            <li>Premium handpicked products</li>
            <li>Expert customization and installation</li>
            <li>Fast, reliable, and trusted service</li>
            <li>Passion-driven team of car enthusiasts</li>
          </ul>
        </div>
        <div className="flex items-center justify-center">
          <img
            src="/about-image.jpg"
            alt="TT Customs garage"
            className="rounded-xl shadow-lg max-h-[400px] w-full object-cover"
          />
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
