import React, { SetStateAction } from "react";
import ProjectModal from "./projectModal";

interface ProjectProps {
  setCurrentProject: SetStateAction<any>;
  title: string;
  src: string;
  color: string;
  index: number;
}
const Project = ({
  setCurrentProject,
  title,
  src,
  color,
  index,
}: ProjectProps) => {
  return (
    <div
      className="h-[20vh] border-y w-full text-black flex items-center justify-center group first-of-type:border-t-0 last-of-type:border-b-0"
      onMouseEnter={() => setCurrentProject({ active: true, index })}
      onMouseLeave={() => setCurrentProject({ active: false, index })}
    >
      <div className="flex items-center justify-between w-full mx-20 group-hover:mx-24 transition-[margin] duration-200">
        <h1 className="text-6xl group-hover:text-slate-500 transition-colors">
          {title}
        </h1>
        <span className="text-slate-500 text-xl group-hover:text-slate-300 transition-colors">
          Design and development
        </span>
      </div>
    </div>
  );
};

export default Project;
