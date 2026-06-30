import { useEffect, useState } from "react";

import { ExperienceCard } from "./ExperienceCard";

import { SectionHeader } from "../ui/SectionHeader";

import { apiEndpoints } from "../../services/api";

import type { Experience } from "../../types/types";

export const Experiences = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const res = await apiEndpoints.getExperiences({});
        const data = res.data?.data;

        setExperiences(data);
        console.log("Experiences: ", data);
      } catch (error) {
        console.error("Error fetching Experiences: ", error);
      }
    };

    fetchExperiences();
  }, []);

  if (!experiences?.length) return;

  return (
    <div id="experiences" className="scroll-m-8 py-15">
      <div className="flex flex-col items-center justify-center gap-10">
        <SectionHeader heading="Experiences" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences?.map((experience, idx) => {
            return (
              <ExperienceCard
                key={experience._id || idx}
                experienceDetails={experience}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
