"use client";

import { projects } from "@/data/projects";
import { SiC, SiPython, SiCplusplus, SiLinux, SiTensorflow, SiNodeJs, SiNodedotjs } from "react-icons/si";


const techIcons: Record<string, any> = {
  C: SiC,
  Python: SiPython,
  "C++": SiCplusplus,
  Linux: SiLinux,
  Tensorflow: SiTensorflow,
  Node: SiNodedotjs,
};


export default function ProjectsGallery() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-2xl font-bold mb-8 text-center">
        Open Source Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-stretch">
        {projects.map((project) => (
          <a
            key={project.url}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-gray-700 rounded-lg overflow-hidden p-4 hover:shadow-lg hover:bg-black transition flex flex-col h-50"
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
            )}
            <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition">
              {project.name}
            </h3>
            <p className="text-gray-300 mb-2 flex-grow">
              {project.description}
            </p>

            {/* Tech icons at the bottom */}
            <div className="flex flex-wrap gap-2 mt-auto text-gray-400">
              {project.tech.map((tech) => {
                const Icon = techIcons[tech];
                return Icon ? (
                  <Icon key={tech} className="w-6 h-6" title={tech} />
                ) : (
                  <span key={tech} className="text-sm">
                    {tech}
                  </span>
                );
              })}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
