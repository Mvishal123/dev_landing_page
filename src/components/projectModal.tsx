"use client";

import { useEffect, useRef } from "react";

interface ProjectModalProps {
  active: boolean;
  index: number;
  projects: any;
  mainRef: React.RefObject<HTMLDivElement>;
}

const ProjectModal = ({
  active,
  index,
  projects,
  mainRef,
}: ProjectModalProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const mouseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const leftHandler = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      ref.current?.animate(
        {
          top: `${clientY - 350 / 2}px`,
          left: `${clientX - 400 / 2}px`,
        },
        { duration: 800, fill: "both" }
      );

      mouseRef.current?.animate(
        {
          top: `${clientY - 40}px`,
          left: `${clientX - 40}px`,
        },
        { duration: 300, fill: "both" }
      );

      console.log;
    };

    window.addEventListener("mousemove", leftHandler);

    return () => {
      window.removeEventListener("mousemove", leftHandler);
    };
  });

  return (
    <>
      <div
        ref={ref}
        className="flex items-center justify-center overflow-hidden fixed h-[350px] w-[400px] left-0 top-0 pointer-events-none"
        style={{
          scale: active ? 1 : 0,
          transition: "scale .3s cubic-bezier(0.65, 0, 0.35, 1)",
        }}
      >
        <div className="flex flex-col h-full w-full relative ">
          {projects.map((project: any) => (
            <div
              key={project.id}
              className="h-[350px] w-[400px] flex items-center justify-center relative"
              style={{
                top: `${index * -100}%`,
                backgroundColor: project.color,
                transition: "top 0.4s cubic-bezier(0.65, 0, 0.35, 1)",
              }}
            >
              <img
                src={project.src}
                alt={project.title}
                className="object-contain object-center h-[350px] w-[350px]"
              />
            </div>
          ))}
        </div>
      </div>
      <div
        className="h-[80px] w-[80px] bg-blue-700 rounded-full fixed pointer-events-none grid place-content-center"
        ref={mouseRef}
        style={{
          scale: active ? 1 : 0,
          transition: "scale .3s cubic-bezier(0.65, 0, 0.35, 1)",
        }}
      >
        <p>View</p>
      </div>
    </>
  );
};

export default ProjectModal;
