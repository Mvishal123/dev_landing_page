"use client";

import { useRef, useState } from "react";
import Project from "./project";
import ProjectModal from "./projectModal";

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
];

const Projects = () => {
  const [currentProject, setCurrentProject] = useState({
    active: false,
    index: 0,
  });

  const mainRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative h-screen flex items-center justify-center"
      ref={mainRef}
    >
      <div className="flex flex-col w-[80%] mx-auto">
        {projects.map((project, index) => (
          <Project
            key={index}
            setCurrentProject={setCurrentProject}
            title={project.title}
            color={project.color}
            src={project.src}
            index={index}
          />
        ))}
      </div>
      <ProjectModal
        projects={projects}
        active={currentProject.active}
        index={currentProject.index}
        mainRef={mainRef}
      />
    </div>
  );
};

export default Projects;
