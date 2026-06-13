import axios from "axios";

import type { PaginationParams, PCAParams } from "../types/types";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error.response?.data || error);
  },
);

export const apiEndpoints = {
  getDetails: () => api.get(`/details`),

  getSocialPlatforms: () => api.get(`/social-platforms`),

  getSkills: () => api.get(`/skills`),

  getCategories: () => api.get(`/categories`),

  getProjects: (params: PCAParams) => api.get(`/projects`, { params }),

  getExperiences: (params: PaginationParams) =>
    api.get(`/experiences`, { params }),

  getEducations: (params: PaginationParams) =>
    api.get(`/educations`, { params }),

  getCertificates: (params: PCAParams) => api.get(`/certificates`, { params }),

  getAchievements: (params: PCAParams) => api.get(`/achievements`, { params }),
};
