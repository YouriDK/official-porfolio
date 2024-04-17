export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'first_name',
      title: 'First Name',
      type: 'string',
    },
    {
      name: 'last_name',
      title: 'Last name',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'bio_fr',
      title: 'Bio (FR)',
      type: 'text',
    },
    {
      name: 'bio_en',
      title: 'Bio (EN)',
      type: 'text',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
};
