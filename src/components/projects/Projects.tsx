import React, { useEffect, useState } from "react";

import { ProjectCard } from "./ProjectCard";

import { SectionHeader } from "../ui/SectionHeader";

import { apiEndpoints } from "../../services/api";

import type { Project } from "../../types/types";

export const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await apiEndpoints.getProjects({ featured: "all" });
        const data = res.data?.data;

        setProjects(data);
        console.log("Projects: ", data);
      } catch (error) {
        console.error("Error fetching Projects: ", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div id="projects" className="py-15">
      <div className="flex flex-col items-center justify-center gap-10">
        <SectionHeader heading="Projects" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects?.map((project, idx) => {
            return (
              <ProjectCard key={project._id || idx} projectDetails={project} />
            );
          })}
        </div>
      </div>
    </div>
  );
};
