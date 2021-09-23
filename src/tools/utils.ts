import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '../client';

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source: any) => {
  console.log('source ->', source);
  return builder.image(source);
};

export const getYear = (date: Date) => {
  return new Date(date).getFullYear();
};

export const texte = {
  modo: {
    fr: "Le code, c'est comme l'humour. Si il faut l'expliquer c'est que c'est mauvais.",
    en: "Coding is like humour. If you have to explain it, it's bad.",
  },
  details_bouton: {
    fr: `Plus d'infos ?`,
    en: 'More infos ?',
  },
};
