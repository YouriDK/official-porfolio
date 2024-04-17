export interface IExperience {
  _id: string;
  order: number;
  name_fr: string;
  name_en: string;
  entreprise: string;
  to: Date;
  from: Date;
  domaine_fr: string;
  domaine_en: string;
  project_fr: string;
  project_en: string;
  description_fr: string;
  description_en: string;
  task_fr: string[];
  task_en: string[];
  environnement: string[];
  image: string;
}

export interface IAuthor {
  name: string;
  first_name: string;
  last_name: string;
  email: string;
  AuthorImage: string;
  bio_fr: string;
  bio_en: string;
}
export interface IProject {
  _id: string;
  order: number;
  name_fr: string;
  name_en: string;
  date: Date;
  domaine_fr: string;
  domaine_en: string;
  link: string;
  description_fr: string;
  description_en: string;
  task_fr: string[];
  task_en: string[];
  environnement: string[];
  entreprise: string;
}

export interface IFormation {
  _id: string;
  order: number;
  title_fr: string;
  title_en: string;
  specialite: string;
  major: string;
  school_fr: string;
  school_en: string;
  place: string;
  to: Date;
  from: Date;
  description_fr: string;
  description_en: string;
  classes_fr: string[];
  classes_en: string[];
  knowledges_fr: string[];
  knowledges_en: string[];
}
export interface ISkill {
  _id: string;
  name: string;
  type: string;
  level: string;
  logo?: string;
  domaine: string;
}

export interface INavBarDataProps {
  title_FR: string;
  title_EN: string;
  link: string;
  className?: string;
  activeClassName?: string;
}
