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
    <div
      className="p-6 bg-white/2 backdrop-blur-xs
        border border-white/20 hover:border-white/50 rounded-2xl
        hover:scale-101 hover:shadow-xl hover:shadow-white/10
        transition-all duration-300"
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-start gap-4">
          <div className="mt-2 p-3 shrink-0 text-white bg-white/10 border border-white/20 rounded-lg">
            <Briefcase />
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-semibold text-white">{organization}</h3>

            <p className="text-blue-400 text-sm capitalize">
              {employmentType.replaceAll("-", " ")}
            </p>

            {location && (
              <span className="text-gray-500 text-sm block capitalize">
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
          <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
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
