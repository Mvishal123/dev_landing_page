import { animate, AnimatePresence, delay, motion, spring } from "framer-motion";
import { useEffect, useState } from "react";

const Preloader = () => {
  const [index, setIndex] = useState(0);
  const words = [
    "Hello",
    "Bonjour",
    "Ciao",
    "Olà",
    "やあ",
    "Hallå",
    "Guten tag",
    "Hallo",
  ];

  useEffect(() => {
    if (index === words.length - 1) return;
    const interval = setInterval(
      () => {
        setIndex((prev) => (prev + 1) % words.length);
      },
      index === 0 ? 1000 : 150
    );

    return () => clearInterval(interval);
  }, [index]);

  return (
    <motion.div
      className="bg-slate-900 fixed h-screen w-screen z-[9999] text-[#fefae0] text-6xl flex items-center justify-center"
      variants={variants}
      initial="initial"
      exit="exit"
      transition={{ ease: "easeInOut" }}
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="flex items-center gap-6"
      >
        <span className="h-6 w-6 bg-[#fefae0] rounded-full"></span>
        {words[index]}
      </motion.p>
    </motion.div>
  );
};

export default Preloader;

const variants = {
  initial: {
    top: 0,
  },
  exit: {
    top: "-100vh",
    transition: {
      duration: 0.5,
      ease: [0.65, 0, 0.35, 1],
      delay: 0.5,
    },
  },
};
