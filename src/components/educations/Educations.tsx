import React, { useEffect, useState } from "react";

import { EducationCard } from "./EducationCard";

import { SectionHeader } from "../ui/SectionHeader";

import { apiEndpoints } from "../../services/api";

import type { Education } from "../../types/types";

export const Educations = () => {
  const [educations, setEducations] = useState<Education[]>([]);

  useEffect(() => {
    const fetchEducations = async () => {
      try {
        const res = await apiEndpoints.getEducations({});
        const data = res.data?.data;

        setEducations(data);
        console.log("Educations: ", data);
      } catch (error) {
        console.error("Error fetching Educations: ", error);
      }
    };

    fetchEducations();
  }, []);

  if (!educations?.length) return;

  return (
    <div id="educations" className="py-15">
      <div className="flex flex-col items-center justify-center gap-10">
        <SectionHeader heading="Education" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {educations?.map((education, idx) => {
            return (
              <EducationCard
                key={education._id || idx}
                educationDetails={education}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
