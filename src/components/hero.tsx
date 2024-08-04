"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useEffect } from "react";

const Hero = () => {
  const firstPara = React.useRef<HTMLParagraphElement>(null);
  const secondPara = React.useRef<HTMLParagraphElement>(null);
  const slider = React.useRef<HTMLDivElement>(null);

  let xPercent = 0;
  let direction = 1;
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    requestAnimationFrame(animation);
  }, []);

  useGSAP(() => {
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 0.25,
        onUpdate: (e) => {
          direction = e.direction;
        },
      },
      x: "+=300",
    });
  });

  const animation = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstPara.current, { xPercent: xPercent });
    gsap.set(secondPara.current, { xPercent: xPercent });
    requestAnimationFrame(animation);
    xPercent += 0.1 * direction;
  };
  return (
    <div className="relative overflow-hidden">
      <Image
        src="/background.jpg"
        alt="background"
        className="h-screen w-screen object-cover object-center brightness-[80%]"
        width={1200}
        height={921}
      />
      <div className="absolute top-[calc(100vh-420px)]">
        <div className="relative" ref={slider}>
          <p
            className="relative text-[300px] text-nowrap tracking-[-0.5rem] font-medium"
            ref={firstPara}
          >
            I am a Developer.
          </p>
          <p
            className={`text-[300px] text-nowrap tracking-[-0.5rem] font-medium absolute top-0 left-full
            }
            }`}
            ref={secondPara}
          >
            I am a Developer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
