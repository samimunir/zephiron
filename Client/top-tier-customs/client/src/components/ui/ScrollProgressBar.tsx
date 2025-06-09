// import { useEffect } from "react";
// import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";

// const ScrollProgressBar = () => {
//   const scrollValue = useMotionValue(0);
//   const smoothProgress = useSpring(scrollValue, {
//     stiffness: 100,
//     damping: 30,
//   });
//   const width = useTransform(smoothProgress, (p) => `${p}%`);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const docHeight =
//         document.documentElement.scrollHeight - window.innerHeight;
//       const progress = (scrollTop / docHeight) * 100;
//       scrollValue.set(progress);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [scrollValue]);

//   return (
//     <motion.div
//       className="fixed top-0 left-0 h-1 z-50"
//       style={{
//         width,
//         background: "linear-gradient(90deg, #ff1d1d, #0057ff)",
//         borderRadius: "2px",
//       }}
//     />
//   );
// };

// export default ScrollProgressBar;

import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

const ScrollProgressBar = () => {
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
          ? "bg-gradient-to-r from-red-500 via-blue-500 to-white"
          : "bg-gradient-to-r from-red-600 via-blue-600 to-pink-500"
      }`}
    />
  );
};

export default ScrollProgressBar;
