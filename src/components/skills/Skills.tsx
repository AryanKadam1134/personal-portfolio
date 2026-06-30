import React, { useEffect, useState } from "react";

import { SkillsCard } from "./SkillsCard";
import { SectionHeader } from "../ui/SectionHeader";

import { apiEndpoints } from "../../services/api";

import type { SkillCategoryWithSkills } from "../../types/types";

export const Skills = () => {
  const [skills, setSkills] = useState<SkillCategoryWithSkills[]>([]);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const res = await apiEndpoints.getCategories();
        const data = res.data;

        setSkills(data);
        console.log("Skills: ", data);
      } catch (error) {
        console.error("Error fetching Skills: ", error);
      }
    };

    fetchExperiences();
  }, []);

  return (
    <div id="skills" className="scroll-m-8 py-15">
      <div className="flex flex-col items-center justify-center gap-10">
        <SectionHeader heading="Technical Skills" />

        <div className="flex flex-col items-center justify-center gap-10">
          {skills?.map((skill, idx) => (
            <SkillsCard key={skill._id || idx} skillDetails={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};
