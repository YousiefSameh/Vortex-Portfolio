export interface IProject {
  _id?: string;

  projectLang: {
    ar: string;
    en: string;
  };

  projectTitle: {
    ar: string;
    en: string;
  };

  projectDescription: {
    ar: string;
    en: string;
  };

  projectURL: string;
  projectGithubURL: string;
  projectImage?: File | string;

  category: {
    ar: string;
    en: string;
  };

  createdAt?: string;
  updatedAt?: string;
  technologies: string;
}
