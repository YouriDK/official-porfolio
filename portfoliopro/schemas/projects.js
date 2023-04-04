/* eslint-disable import/no-anonymous-default-export */
export default {
  name: 'projects',
  title: 'Projects',
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
      title: 'Intro (EN)',
      name: 'intro_en',
      type: 'string',
    },
    {
      title: 'Intro (FR)',
      name: 'intro_fr',
      type: 'string',
    },
    {
      name: 'date',
      title: 'Date',
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
          { value: 'Job/Work', title: 'Professionnal' },
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
      title: 'Entreprise',
      name: 'entreprise',
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
