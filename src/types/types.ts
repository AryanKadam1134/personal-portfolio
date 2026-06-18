export type ApiRes<T> = {
  statusCode: number;
  data: T;
  message: string;
  success: true;
};

export type ApiError = {
  success: false;
  status: number;
  message: string;
};

export type FeaturedFilter = "true" | "false" | "all";

export type PaginationParams = {
  page?: number;
  limit?: number;
};

export type PCAParams = PaginationParams & {
  featured?: FeaturedFilter;
};

export type Pagination = {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};

export type Paginated<T> = {
  data: T[];
  pagination: Pagination;
};

export type MediaAsset = {
  url: string | undefined;
  public_id: string | undefined;
  resource_type: string | undefined;
};

export type MediaAssetRequired = {
  url: string;
  public_id: string;
  resource_type: string;
};

export type PortfolioLocation = {
  country: string | null;
  state: string | null;
  city: string | null;
};

export type PortfolioDetails = {
  _id: string;
  username: string;
  email: string;
  firstName: string;
  middleName: string | null;
  lastName: string | null;
  headline: string | null;
  about: string | null;
  mobileNo: number | null;
  gender: "male" | "female" | "other" | null;
  location: PortfolioLocation;
  documentUrl: string | null;
  image: MediaAsset;
  resumeOrCv: MediaAsset;
  createdAt: string;
  updatedAt: string;
};

export type SocialPlatform = {
  _id: string;
  owner: string;
  name: string;
  link: string;
  logoUrl: string;
  visibility: "public";
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
};

export type SkillCategory = {
  _id: string;
  owner: string;
  name: string;
  visibility: "public" | "private";
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
};

export type Skill = {
  _id: string;
  owner: string;
  name: string;
  description: string | null;
  level: "basic" | "intermediate" | "advance";
  visibility: "public";
  sortOrder: number;
  categoryId: string | null;
  category: SkillCategory;
};

export type CategorySkill = {
  _id: string;
  owner: string;
  name: string;
  logoUrl: string;
  description: string | null;
  level: "basic" | "intermediate" | "advance";
  visibility: "public";
  sortOrder: number;
  categoryId: string;
};

export type SkillCategoryWithSkills = {
  _id: string;
  owner: string;
  name: string;
  logoUrl: string;
  visibility: "public";
  sortOrder: number;
  skills: CategorySkill[];
};

export type TechStackRef = {
  _id: string;
  name: string;
};

export type OrganizationDetails = {
  _id: string;
  organization: string;
  location: string | null;
  locationType: "on-site" | "remote" | "hybrid";
  organizationImage: MediaAsset;
};

export type Project = {
  _id: string;
  owner: string;
  organizationId: string | null;
  organizationDetails: OrganizationDetails;
  title: string;
  description: string | null;
  startDate: string | null;
  endDate: string | null;
  isCurrent: boolean;
  category: "personal" | "freelance" | "hackathon" | "client" | "open-source";
  techStack: TechStackRef[];
  coverImageIndex: number | null;
  projectImages: MediaAssetRequired[];
  githubLink: string | null;
  liveLink: string | null;
  featured: boolean;
  visibility: "public";
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
};

export type ExperiencePosition = {
  role: string;
  startDate: string;
  endDate: string | null;
  isCurrent: boolean;
};

export type Experience = {
  _id: string;
  owner: string;
  organization: string;
  description: string | null;
  organizationSize: string | null;
  organizationWebsite: string | null;
  positions: ExperiencePosition[];
  latestDate: string | null;
  employmentType:
    | "full-time"
    | "part-time"
    | "contract"
    | "freelance"
    | "internship"
    | "apprenticeship";
  highlights: string[];
  techStack: TechStackRef[];
  location: string | null;
  locationType: "on-site" | "remote" | "hybrid";
  organizationImage: MediaAsset;
  visibility: "public";
  createdAt: string;
  updatedAt: string;
};

export type Education = {
  _id: string;
  owner: string;
  instituteName: string;
  qualification: string;
  description: string | null;
  location: string | null;
  startYear: number;
  endYear: number | null;
  isCurrent: boolean;
  latestYear: number;
  percentage: number | null;
  cgpa: number | null;
  instituteImage: MediaAsset;
  createdAt: string;
  updatedAt: string;
};

export type Certificate = {
  _id: string;
  owner: string;
  title: string;
  description: string | null;
  issuer: string;
  credentialId: string | null;
  credentialUrl: string | null;
  certificateImage: MediaAsset;
  issueDate: string | null;
  expiryDate: string | null;
  skills: TechStackRef[];
  featured: boolean;
  visibility: "public";
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
};

export type CertificateDetails = {
  _id: string;
  title: string;
  issuer: string;
  credentialUrl: string | null;
  certificateImage: MediaAsset;
};

export type Achievement = {
  _id: string;
  owner: string;
  title: string;
  description: string | null;
  issuer: string | null;
  link: string | null;
  date: string | null;
  location: string | null;
  certificateId: string | null;
  certificateDetails: CertificateDetails;
  coverImageIndex: number | null;
  achievementImages: MediaAssetRequired[];
  featured: boolean;
  visibility: "public";
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
};
