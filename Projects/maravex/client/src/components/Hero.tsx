import { useTheme } from "../context/Theme";
import HeroImg from "../assets/man-lake-reflection.jpg";

const Hero = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <main className="w-full h-[100vh] p-16">
      <section
        className={`w-full h-[100%] rounded-xl ${
          isDark ? "bg-zinc-900 text-zinc-200" : "bg-zinc-200 text-zinc-900"
        } transition-all`}
      >
        <div className="w-full mx-auto">
          <img src={HeroImg} alt="Hero" className="rounded-xl" />
        </div>
        <div></div>
      </section>
    </main>
  );
};

export default Hero;
