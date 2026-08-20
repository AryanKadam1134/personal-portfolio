import { Briefcase } from "lucide-react";

import { Badge } from "../ui/Badge";

import { formatDate } from "../../utils/formatDate";

import type { Experience } from "../../types/types";

export const ExperienceCard = ({
  experienceDetails,
}: {
  experienceDetails: Experience;
}) => {
  const {
    _id,
    organization,
    description,
    employmentType,
    location,
    locationType,
    positions,
    highlights,
    techStack,
  } = experienceDetails || {};

  return (
    <div className="rounded-2xl border border-white/20 bg-white/2 p-6 backdrop-blur-xs transition-all duration-300 hover:scale-101 hover:border-white/50 hover:shadow-xl hover:shadow-white/10">
      <div className="flex flex-col gap-4">
        <div className="flex items-start gap-4">
          <div className="mt-2 shrink-0 rounded-lg border border-white/20 bg-white/10 p-3 text-white">
            <Briefcase />
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-semibold text-white">{organization}</h3>

            <p className="text-sm text-blue-400 capitalize">
              {employmentType.replaceAll("-", " ")}
            </p>

            {location && (
              <span className="block text-sm text-gray-500 capitalize">
                {location} • {locationType.replaceAll("-", " ")}
              </span>
            )}
          </div>
        </div>

        <div className="space-y-2 text-sm text-gray-300">
          {positions.map((position, positionIndex) => (
            <div key={`${_id}-position-${positionIndex}`}>
              <div className="font-medium text-white">{position.role}</div>

              <div className="text-gray-500">
                {position.isCurrent
                  ? `${formatDate(position.startDate)} - Present`
                  : `${formatDate(position.startDate)} - ${formatDate(position.endDate)}`}
              </div>
            </div>
          ))}
        </div>

        {description && <p className="text-sm text-gray-400">{description}</p>}

        {highlights.length > 0 && (
          <ul className="list-inside list-disc space-y-1 text-sm text-gray-400">
            {highlights.map((highlight, highlightIndex) => (
              <li key={`${_id}-highlight-${highlightIndex}`}>{highlight}</li>
            ))}
          </ul>
        )}

        {techStack.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <Badge key={tech.name} text={tech.name} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
