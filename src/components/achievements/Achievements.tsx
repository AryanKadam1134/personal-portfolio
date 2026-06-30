import React, { useEffect, useState } from "react";

import { AchievementCard } from "./AchievementCard";

import { SectionHeader } from "../ui/SectionHeader";

import { apiEndpoints } from "../../services/api";

import type { Achievement } from "../../types/types";

export const Achievements = () => {
  const [achievements, setAchievements] = useState<Achievement[]>([]);

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const res = await apiEndpoints.getAchievements({});
        const data = res.data?.data;

        setAchievements(data);
        console.log("Achievements: ", data);
      } catch (error) {
        console.error("Error fetching Achievements: ", error);
      }
    };

    fetchAchievements();
  }, []);

  if (!achievements?.length) return;

  return (
    <div id="acheivements" className="py-15">
      <div className="flex flex-col items-center justify-center gap-10">
        <SectionHeader heading="Achievements" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements?.map((achievement, idx) => {
            return (
              <AchievementCard
                key={achievement._id || idx}
                achievementDetails={achievement}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
