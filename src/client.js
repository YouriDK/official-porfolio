import { createClient } from '@sanity/client';

export default createClient({
  projectId: 'dmdjos1g',
  dataset: 'production',
  useCdn: true,
});
