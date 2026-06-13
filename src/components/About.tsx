import { useEffect, useState } from "react";

import { apiEndpoints } from "../services/api";

import type { PortfolioDetails } from "../types/types";

export const About = () => {
  const [details, setDetails] = useState<PortfolioDetails | null>(null);

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
    <div id="about" className="py-20 text-white">
      {details?.about}
    </div>
  );
};
