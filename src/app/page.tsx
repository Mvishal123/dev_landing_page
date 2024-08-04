"use client";

import Description from "@/components/description";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Preloader from "@/components/preloader";
import ProjectSlider from "@/components/project-slider";
import Projects from "@/components/projects";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Page = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();

    setTimeout(() => {
      setLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 2000);
  }, []);
  return (
    <>
      <AnimatePresence>{loading && <Preloader />}</AnimatePresence>
      <div>
        <Hero />
        <Description />
        <Projects />
        <ProjectSlider />
        <Footer />
      </div>
    </>
  );
};

export default Page;
