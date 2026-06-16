import React, { useEffect, useState } from "react";

import { ExternalLink } from "lucide-react";

import { SectionHeader } from "./ui/SectionHeader";
import { type Project } from "../types/types";
import { apiEndpoints } from "../services/api";

export const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await apiEndpoints.getProjects({ featured: "all" });
        const data = res.data?.data;

        setProjects(data);
        console.log("Projects: ", data);
      } catch (error) {
        console.error("Error fetching Projects: ", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div id="projects" className="py-20">
      <div className="flex flex-col items-center justify-center gap-8">
        <SectionHeader heading="Projects" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects?.map((project, idx) => {
            const {
              _id,
              title,
              description,
              githubLink,
              liveLink,
              techStack,
              coverImageIndex,
              projectImages,
            } = project;

            const coverImage = projectImages[coverImageIndex ?? 0];
            const { url } = coverImage || {};

            return (
              <div
                key={_id || idx}
                className="group bg-white/2 backdrop-blur-xs
                border border-white/20 hover:border-white/50 rounded-2xl
                hover:scale-101 hover:shadow-xl hover:shadow-white/10
                transition-all duration-300 overflow-hidden"
              >
                <div className="h-full flex flex-col">
                  {/* Project Image */}
                  <div className="aspect-video relative overflow-hidden">
                    {url ? (
                      <img
                        src={url}
                        alt={title}
                        className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-linear-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                        <span className="text-slate-500 text-sm">
                          Project Preview
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content container with flex-grow to push links to bottom */}
                  <div className="p-6 space-y-4 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                      {description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-4">
                      {techStack.map((tech, techIndex) => (
                        <span
                          key={`${_id}-${tech._id}-${techIndex}`}
                          className="px-2.5 py-1 text-xs text-white bg-white/10 border border-white/20 rounded-full"
                        >
                          {tech.name}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 pt-4 mt-auto">
                      {/* Added mt-auto */}
                      {githubLink && (
                        <a
                          href={githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors text-sm font-medium"
                        >
                          <ExternalLink className="w-4 h-4" />
                          GitHub
                        </a>
                      )}

                      {liveLink && (
                        <a
                          href={liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors text-sm font-medium"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Visit site
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
