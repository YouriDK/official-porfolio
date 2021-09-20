import { string } from 'prop-types';

export default {
  name: 'formation',
  title: 'Formation',
  type: 'document',
  fields: [
    {
      name: 'title_FR',
      title: 'Titre',
      type: 'string',
    },
    {
      name: 'title_EN',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'place',
      title: 'Lieu',
      type: 'string',
    },
    {
      name: 'to',
      title: 'De',
      type: 'date',
    },
    {
      name: 'from',
      title: 'à',
      type: 'date',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'classes',
      title: 'Sujet de cours',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'knowledges',
      title: 'Acquis',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
};
