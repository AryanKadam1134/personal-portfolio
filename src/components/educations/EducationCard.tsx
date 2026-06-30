import React from "react";

import { GraduationCap } from "lucide-react";

import type { Education } from "../../types/types";

export const EducationCard = ({
  educationDetails,
}: {
  educationDetails: Education;
}) => {
  const {
    qualification,
    instituteName,
    startYear,
    endYear,
    isCurrent,
    latestYear,
    cgpa,
    percentage,
  } = educationDetails || {};

  const formatScore = (cgpa: number | null, percentage: number | null) => {
    if (cgpa !== null && cgpa !== undefined) return `CGPA: ${cgpa}`;
    if (percentage !== null && percentage !== undefined)
      return `Percentage: ${percentage}%`;
    return "Ongoing";
  };

  const formatYearRange = (
    startYear: number,
    endYear: number | null,
    isCurrent: boolean,
    latestYear: number,
  ) => {
    if (isCurrent) return `${startYear} - Present`;
    if (endYear) return `${startYear} - ${endYear}`;
    return `${startYear} - ${latestYear}`;
  };

  return (
    <div
      className="p-6 bg-white/2 backdrop-blur-xs
        border border-white/20 hover:border-white/50 rounded-2xl
        hover:scale-101 hover:shadow-xl hover:shadow-white/10
        transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="mt-2 p-3 shrink-0 text-white bg-white/10 border border-white/20 rounded-lg">
          <GraduationCap />
        </div>

        <div className="grow flex flex-col gap-1">
          <h3 className="text-lg font-semibold text-white">{qualification}</h3>

          <h4 className="text-sm text-purple-400">{instituteName}</h4>

          <div className="flex gap-4 text-sm text-gray-500">
            <span>
              {formatYearRange(startYear, endYear, isCurrent, latestYear)}
            </span>

            <span>{formatScore(cgpa, percentage)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
