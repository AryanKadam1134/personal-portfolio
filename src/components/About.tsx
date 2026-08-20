import { useEffect, useState } from "react";

import { Download, MapPin } from "lucide-react";

import { apiEndpoints } from "../services/api";

import { cn } from "../utils/cn";

import type { SocialPlatform, PortfolioDetails } from "../types/types";

export const About = () => {
  const [details, setDetails] = useState<PortfolioDetails | null>(null);
  const [platforms, setPlatforms] = useState<SocialPlatform[]>([]);

  const { firstName, lastName, image, about, headline, location } =
    details || {};
  const { url } = image || {};
  const { city, state } = location || {};

  useEffect(() => {
    const fetchDetailsAndSocialPlatforms = async () => {
      try {
        const [detailsRes, platformsRes] = await Promise.all([
          apiEndpoints.getDetails(),
          apiEndpoints.getSocialPlatforms(),
        ]);

        // const details = detailsRes.data;
        // const platfroms = platformsRes.data

        setDetails(detailsRes.data);
        setPlatforms(platformsRes.data);
      } catch (error) {
        console.error("Error fetching Details: ", error);
      }
    };

    fetchDetailsAndSocialPlatforms();
  }, []);

  return (
    <div id="about" className="pt-35 pb-15 text-white">
      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* Left Container */}
        <div className="flex justify-center lg:justify-end">
          <div className="aspect-3/4 w-full max-w-[300px] overflow-hidden rounded-2xl lg:max-w-[400px]">
            <img
              src={url}
              alt="Profile Image"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Right Container */}
        <div className="flex flex-col items-center gap-4 lg:items-start">
          <p className="text-4xl font-semibold lg:text-6xl">
            {firstName} {lastName}
          </p>

          <p className="text-blue-400">{headline}</p>

          <p className="mt-4 max-w-150 text-center text-white/80 lg:text-start">
            {about}
          </p>

          {(city || state) && (
            <div className="flex items-center gap-2">
              <MapPin size={22} />

              <p>
                {city} {state && <span>, {state}</span>}
              </p>
            </div>
          )}

          <div className="mt-4 flex items-center gap-3">
            {platforms?.map((platform, idx) => {
              const { name, link, logoUrl } = platform || {};

              return (
                <button
                  key={idx}
                  onClick={() => window.open(link, "_blank")}
                  className={cn(
                    "group cursor-pointer rounded-md border border-white/20 bg-white/2 p-3 backdrop-blur-xs",
                    "transition-all duration-300 hover:scale-103 hover:border-white/50",
                  )}
                >
                  <img
                    src={logoUrl}
                    alt={name}
                    className="size-4 group-hover:scale-103"
                  />
                </button>
              );
            })}

            <button
              className={cn(
                "ml-4 cursor-pointer rounded-md border border-white/20 bg-white/2 px-4 py-2 backdrop-blur-xs",
                "transition-all duration-300 hover:scale-103 hover:border-white/50",
              )}
            >
              <div className="flex items-center gap-2">
                <Download size={20} /> My Resume
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
