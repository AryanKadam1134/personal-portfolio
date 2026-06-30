import { Award, ExternalLink } from "lucide-react";

import { formatDate } from "../../utils/formatDate";

import type { Achievement } from "../../types/types";

export const AchievementCard = ({
  achievementDetails,
}: {
  achievementDetails: Achievement;
}) => {
  const { title, issuer, date, link, certificateDetails } =
    achievementDetails || {};

  const achievementLink =
    link || certificateDetails?.credentialUrl || undefined;

  return (
    <div
      className="p-6 bg-white/2 backdrop-blur-xs
        border border-white/20 hover:border-white/50 rounded-2xl
        hover:scale-101 hover:shadow-xl hover:shadow-white/10
        transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="mt-2 p-3 shrink-0 text-white bg-white/10 border border-white/20 rounded-lg">
          <Award />
        </div>

        <div className="grow flex flex-col gap-1">
          <h3 className="text-lg font-semibold text-white">{title}</h3>

          {issuer && <p className="text-blue-400 text-sm">{issuer}</p>}

          <span className="text-gray-500 text-sm block mb-3">
            {formatDate(date)}
          </span>

          {achievementLink && (
            <a
              href={achievementLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-medium text-sm text-gray-400 hover:text-blue-400 transition-colors"
            >
              <ExternalLink size={16} />

              <span className="font-medium">View Certificate</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
