import { useTheme } from "../context/Theme";

const Landing = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <main
      className={`min-h-[100vh] w-full flex justify-center items-center ${
        isDark ? "bg-zinc-800 text-zinc-100" : "bg-zinc-100 text-zinc-800"
      }`}
    >
      <h1 className="text-5xl font-bold">MARAVEX</h1>
    </main>
  );
};

export default Landing;
