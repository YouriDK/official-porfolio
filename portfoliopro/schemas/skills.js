export default {
  name: 'skills',
  title: 'Skills',
  type: 'document',
  fields: [
    {
      title: 'Name ',
      name: 'name',
      type: 'string',
    },

    {
      title: 'Domaine',
      name: 'domaine',
      type: 'string',
      options: {
        list: [
          { value: 'main', title: 'Main' },
          { value: 'solid', title: 'Solide' },
          { value: 'base', title: 'Base' },
        ],
      },
    },
    {
      title: 'Type',
      name: 'type',
      type: 'string',
      options: {
        list: [
          { value: 'software', title: 'Soft Ware' },
          { value: 'langage_it', title: 'Langage IT' },
          { value: 'langage', title: 'Langage' },
          { value: 'tech', title: 'Technologie' },
          { value: 'others', title: 'Others' },
        ],
      },
    },
    {
      name: 'level',
      title: 'Level',
      type: 'string',
      options: {
        list: [
          { value: 'basic', title: 'Basic' },
          { value: 'intermediate', title: 'Intermediate' },
          { value: 'advanced', title: 'Advanced' },
          { value: 'expert', title: 'Expert' },
        ],
      },
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
