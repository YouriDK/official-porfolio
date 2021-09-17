import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'dmdjos1g',
  dataset: 'production',
  useCdn: true,
});
