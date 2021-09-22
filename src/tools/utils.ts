import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '../client';

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source: any) => {
  console.log('source ->', source);
  return builder.image(source);
};
