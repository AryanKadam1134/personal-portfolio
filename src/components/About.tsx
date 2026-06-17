import { useEffect, useState } from "react";

import { Download, MapPin } from "lucide-react";

import { apiEndpoints } from "../services/api";

import { type SocialPlatform, type PortfolioDetails } from "../types/types";

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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Container */}
        <div className="flex justify-center lg:justify-end">
          <div className="aspect-3/4 w-full max-w-[300px] lg:max-w-[400px] rounded-2xl overflow-hidden">
            <img
              src={url}
              alt="Profile Image"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Right Container */}
        <div className="flex flex-col items-center lg:items-start">
          <p className="font-semibold text-4xl lg:text-6xl">
            {firstName} {lastName}
          </p>

          <p className="mt-4 text-blue-400">{headline}</p>

          <p className="mt-8 max-w-150 text-center lg:text-start text-white/80">
            {about}
          </p>

          <div className="mt-4 flex items-center gap-2">
            <MapPin size={22} />

            <p>
              {city} {state && <span>, {state}</span>}
            </p>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {platforms?.map((platform, idx) => {
              const { name, link, logoUrl } = platform || {};

              return (
                <button
                  key={idx}
                  onClick={() => window.open(link, "_blank")}
                  className="p-3 group bg-white/2 backdrop-blur-xs border border-white/20 hover:border-white/50 rounded-md hover:scale-103 transition-all duration-300 cursor-pointer"
                >
                  <img
                    src={logoUrl}
                    alt={name}
                    className="size-4 group-hover:scale-103"
                  />
                </button>
              );
            })}

            <button className="ml-4 px-4 py-2 bg-white/2 backdrop-blur-xs border border-white/20 hover:border-white/50 rounded-md hover:scale-103 transition-all duration-300 cursor-pointer">
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
