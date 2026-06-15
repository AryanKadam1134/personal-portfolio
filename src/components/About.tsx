import { useEffect, useState } from "react";

import { apiEndpoints } from "../services/api";

import type { PortfolioDetails } from "../types/types";
import { MapPin } from "lucide-react";

export const About = () => {
  const [details, setDetails] = useState<PortfolioDetails | null>(null);

  const { firstName, lastName, image, about, headline, location } =
    details || {};
  const { url } = image || {};
  const { city, state } = location || {};

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await apiEndpoints.getDetails();
        const data = res.data;

        setDetails(data);
      } catch (error) {
        console.error("Error fetching Details: ", error);
      }
    };

    fetchDetails();
  }, []);

  return (
    <div id="about" className="pt-35 pb-20 text-white">
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
        </div>
      </div>
    </div>
  );
};
