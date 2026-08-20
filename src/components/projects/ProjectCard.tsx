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
  } = projectDetails || {};

  const coverImage = projectImages[coverImageIndex ?? 0];
  const { url } = coverImage || {};

  return (
    <div className="group overflow-hidden rounded-2xl border border-white/20 bg-white/2 backdrop-blur-xs transition-all duration-300 hover:scale-101 hover:border-white/50 hover:shadow-xl hover:shadow-white/10">
      <div className="flex h-full flex-col">
        {/* Project Image */}
        <div className="relative aspect-video overflow-hidden">
          {url ? (
            <img
              src={url}
              alt={title}
              className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-103"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-blue-600/20 to-purple-600/20">
              <span className="text-sm text-slate-500">Project Preview</span>
            </div>
          )}
        </div>

        {/* Content container with flex-grow to push links to bottom */}
        <div className="flex grow flex-col gap-4 p-6">
          <h3 className="text-xl font-bold text-white transition-colors group-hover:text-blue-400">
            {title}
          </h3>

          <p className="grow text-sm leading-relaxed text-gray-400">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 pt-4">
            {techStack.map((tech, idx) => (
              <Badge key={tech.name || idx} text={tech.name} />
            ))}
          </div>

          <div className="mt-auto flex gap-4 pt-4">
            {/* Added mt-auto */}
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-gray-400 transition-colors hover:text-purple-400"
              >
                <ExternalLink size={16} />
                GitHub
              </a>
            )}

            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-gray-400 transition-colors hover:text-blue-400"
              >
                <ExternalLink size={16} />
                Visit site
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
