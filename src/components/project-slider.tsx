import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ProjectSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sliderRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="mt-60 mb-32 overflow-hidden z-[99] relative bg-white pb-60 shadow-2xl shadow-black">
      <div ref={sliderRef} className="flex flex-col gap-20">
        <motion.div
          className="flex overflow-hidden w-[220vw] gap-10 relative -left-[20vw]"
          style={{ x: x1 }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6"
              style={{
                backgroundColor: project.color,
              }}
            >
              <img src={`/${project.src}`} alt="img" className="" />
            </div>
          ))}
        </motion.div>
        <motion.div
          className="flex overflow-hidden w-[220vw] gap-10 relative -left-[20vw]"
          style={{ x: x2 }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6"
              style={{
                backgroundColor: project.color,
              }}
            >
              <img src={`/${project.src}`} alt="img" className="" />
            </div>
          ))}
        </motion.div>
        {/* <div className="h-[100px] relative">
          <div
            className=""
            style={{
              boxShadow: "0 60px 50px rgba(255, 255, 255, 0.5)",
              height: "1550%",
              position: "absolute",
              width: "120%",
              left: `-10%`,
              zIndex: 10,
            }}
          ></div>
        </div> */}
      </div>
    </div>
  );
};

export default ProjectSlider;

export const projects = [
  {
    title: "C2 Montreal",
    src: "c2montreal.png",
    color: "#000000",
  },
  {
    title: "Office Studio",
    src: "officestudio.png",
    color: "#8C8C8C",
  },
  {
    title: "Locomotive",
    src: "locomotive.png",
    color: "#EFE8D3",
  },
  {
    title: "Silencio",
    src: "silencio.png",
    color: "#706D63",
  },
  {
    title: "C2 Montreal",
    src: "c2montreal.png",
    color: "#000000",
  },

  {
    title: "Office Studio",
    src: "officestudio.png",
    color: "#8C8C8C",
  },
  {
    title: "Locomotive",
    src: "locomotive.png",
    color: "#EFE8D3",
  },
];
