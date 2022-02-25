/* eslint-disable import/no-anonymous-default-export */
export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'order',
      title: 'Order',
      type: 'number',
    },
    {
      title: 'Name (FR)',
      name: 'name_fr',
      type: 'string',
    },
    {
      title: 'Name (EN)',
      name: 'name_en',
      type: 'string',
    },
    {
      title: 'Entreprise',
      name: 'entreprise',
      type: 'string',
    },
    {
      name: 'from',
      title: 'De',
      type: 'date',
    },
    {
      name: 'to',
      title: 'à',
      type: 'date',
    },
    {
      title: 'Domaine (FR)',
      name: 'domaine_fr',
      type: 'string',
      options: {
        list: [
          { value: 'Stage', title: 'Stage' },
          { value: 'Alternance', title: 'Alternance' },
          { value: 'Professionnel', title: 'Professionnel' },
          { value: 'Projet-Professionnel', title: 'Projet-Professionnel' },
          { value: 'Autodidacte', title: 'Autodidacte' },
        ],
      },
    },
    {
      title: 'Domaine (EN)',
      name: 'domaine_en',
      type: 'string',
      options: {
        list: [
          { value: 'Internship', title: 'Internship' },
          { value: 'Work-study program', title: 'Work-study program' },
          { value: 'Job/Work', title: 'Professionnel' },
          { value: 'Professional project', title: 'Professional project' },
          { value: 'Self-taught', title: 'Self-taught' },
        ],
      },
    },
    {
      title: 'Lien du Projet',
      name: 'link',
      type: 'url',
    },
    {
      title: 'Project (FR)',
      name: 'project_fr',
      type: 'string',
    },
    {
      title: 'Project(EN)',
      name: 'project_en',
      type: 'string',
    },
    {
      title: 'Description (FR)',
      name: 'description_fr',
      type: 'blockContent',
    },
    {
      title: 'Description(EN)',
      name: 'description_en',
      type: 'blockContent',
    },
    {
      title: 'Task (FR)',
      name: 'task_fr',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      title: 'Task (EN)',
      name: 'task_en',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      title: 'Environnement',
      name: 'environnement',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
};
