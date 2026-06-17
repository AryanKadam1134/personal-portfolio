import React from "react";

import { ExternalLink } from "lucide-react";

import { Badge } from "../ui/Badge";

import type { Project } from "../../types/types";

export const ProjectCard = ({
  projectDetails,
}: {
  projectDetails: Project;
}) => {
  const {
    title,
    description,
    githubLink,
    liveLink,
    techStack,
    coverImageIndex,
    projectImages,
  } = projectDetails;

  const coverImage = projectImages[coverImageIndex ?? 0];
  const { url } = coverImage || {};

  return (
    <div
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
              <span className="text-slate-500 text-sm">Project Preview</span>
            </div>
          )}
        </div>

        {/* Content container with flex-grow to push links to bottom */}
        <div className="p-6 grow flex flex-col gap-4">
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
            {title}
          </h3>

          <p className="grow text-gray-400 text-sm leading-relaxed">
            {description}
          </p>

          <div className="pt-4 flex flex-wrap gap-2">
            {techStack.map((tech, idx) => (
              <Badge key={tech.name || idx} text={tech.name} />
            ))}
          </div>

          <div className="pt-4 flex gap-4 mt-auto">
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
};
