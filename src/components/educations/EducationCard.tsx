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
    <div className="rounded-2xl border border-white/20 bg-white/2 p-6 backdrop-blur-xs transition-all duration-300 hover:scale-101 hover:border-white/50 hover:shadow-xl hover:shadow-white/10">
      <div className="flex items-start gap-4">
        <div className="mt-2 shrink-0 rounded-lg border border-white/20 bg-white/10 p-3 text-white">
          <GraduationCap />
        </div>

        <div className="flex grow flex-col gap-1">
          <h3 className="text-lg font-semibold text-white">{qualification}</h3>

          <h4 className="text-sm text-purple-400">{instituteName}</h4>

          <span className="block text-sm text-gray-500">
            {formatYearRange(startYear, endYear, isCurrent, latestYear)} •{" "}
            {formatScore(cgpa, percentage)}
          </span>
        </div>
      </div>
    </div>
  );
};
