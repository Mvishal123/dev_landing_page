import { delay, motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const desc =
  "Helping businesses grow by creating digital experiences that are tailored to their needs. I specialize in creating websites, web applications.";

const splitDesc = desc.split(" ");

const Description = () => {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { amount: "some" });
  return (
    <div className="my-48 px-40 flex items-start justify-between text-black">
      <div className="flex w-[750px] flex-wrap gap-2 text-4xl">
        {splitDesc.map((word, index) => (
          <motion.p
            key={index}
            ref={ref}
            variants={variants}
            initial="initial"
            animate={inView ? "open" : "close"}
            custom={index}
          >
            {word}
          </motion.p>
        ))}
      </div>
      <div className="w-1/4 relative">
        <p className="text-xl">
          The combination of my passion for design, code & interaction positions
          me in a unique place in the web design world.
        </p>
        <button
          data-scroll
          data-scroll-speed="0.1"
          className="h-[180px] aspect-square bg-slate-800 rounded-full absolute -bottom-50 text-white"
        >
          About me
        </button>
      </div>
    </div>
  );
};

export default Description;

const variants = {
  initial: {
    opacity: 0,
    y: 20,
  },

  open: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.03,
    },
  }),

  close: {
    opacity: 0,
    y: 20,
  },
};
