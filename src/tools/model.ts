export interface experience {
  order: number;
  title: string;
  from: Date;
  to: Date;
  entreprise: string;
  sujet: string;
  job: string;
  taches: string;
  tasks: string;
  _id: string;
}

export interface formations {
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
