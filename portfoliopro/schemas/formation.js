import { string } from 'prop-types';

export default {
  name: 'formation',
  title: 'Formation',
  type: 'document',
  fields: [
    {
      name: 'order',
      title: 'Order',
      type: 'number',
    },
    {
      name: 'title_fr',
      title: 'Titre',
      type: 'string',
    },
    {
      name: 'title_en',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'specialite',
      title: 'Spec (FR)',
      type: 'string',
    },
    {
      name: 'major',
      title: 'Spec (EN)',
      type: 'string',
    },
    {
      name: 'school_fr',
      title: 'Ecole',
      type: 'string',
    },
    {
      name: 'school_en',
      title: 'School',
      type: 'string',
    },
    {
      name: 'place',
      title: 'Lieu',
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
      name: 'description_fr',
      title: 'Description (FR)',
      type: 'text',
    },
    {
      name: 'description_en',
      title: 'Description (EN)',
      type: 'text',
    },
    {
      name: 'classes_fr',
      title: 'Sujet de cours (FR)',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'classes_en',
      title: 'Sujet de cours (EN)',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'knowledges_fr',
      title: 'Acquis (FR)',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'knowledges_en',
      title: 'Acquis (EN)',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
};
