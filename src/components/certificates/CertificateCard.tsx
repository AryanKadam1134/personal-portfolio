import { Award, ExternalLink } from "lucide-react";

import { cn } from "../../utils/cn";
import { formatDate } from "../../utils/formatDate";

import type { Certificate } from "../../types/types";

export const CertificateCard = ({
  certificateDetails,
}: {
  certificateDetails: Certificate;
}) => {
  const { title, issuer, issueDate, credentialUrl } = certificateDetails || {};

  return (
    <div
      className={cn(
        "rounded-2xl border border-white/20 bg-white/2 p-6 backdrop-blur-xs",
        "transition-all duration-300 hover:scale-101 hover:border-white/50 hover:shadow-xl hover:shadow-white/10",
      )}
    >
      <div className="flex items-start gap-4">
        <div className="mt-2 shrink-0 rounded-lg border border-white/20 bg-white/10 p-3 text-white">
          <Award />
        </div>

        <div className="flex grow flex-col gap-1">
          <h3 className="text-lg font-semibold text-white">{title}</h3>

          {issuer && <p className="text-sm text-blue-400">{issuer}</p>}

          <span className="mb-3 block text-sm text-gray-500">
            {formatDate(issueDate)}
          </span>

          {credentialUrl && (
            <a
              href={credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-gray-400 transition-colors hover:text-blue-400"
            >
              <ExternalLink size={16} />
              View Certificate
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
