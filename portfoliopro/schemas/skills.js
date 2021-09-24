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
          { value: 'hard', title: 'Hard Skills' },
          { value: 'soft', title: 'Soft Skills' },
          { value: 'others', title: 'Others' },
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
          { value: 'hardware', title: 'Hard Ware' },
          { value: 'langage', title: 'Langage' },
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
  ],
};
