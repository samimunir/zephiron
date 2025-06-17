import { useTheme } from "../context/Theme";
import Hero from "../components/Hero";

const Landing = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <main
      className={`min-h-[100vh] w-full ${
        isDark ? "bg-zinc-300 text-zinc-600" : "bg-zinc-100 text-zinc-800"
      }`}
    >
      <Hero />
    </main>
  );
};

export default Landing;
