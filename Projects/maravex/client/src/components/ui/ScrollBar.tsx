import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

const ScrollBar = () => {
  const { scrollYProgress } = useScroll();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    const observer = new MutationObserver(() => {
      setIsDark(html.classList.contains("dark"));
    });

    observer.observe(html, { attributes: true, attributeFilter: ["class"] });
    setIsDark(html.classList.contains("dark")); // initial check

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className={`fixed top-0 left-0 h-1 w-full origin-left z-[1000] rounded-full shadow-md transition-colors duration-300 ${
        isDark
          ? "bg-gradient-to-r from-sky-500 via-indigo-500 to-rose-500"
          : "bg-gradient-to-r from-sky-500 via-indigo-500 to-rose-500"
      }`}
    />
  );
};

export default ScrollBar;
