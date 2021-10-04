import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '../client';
import { NavBarDataProps } from './model';

export const Navbardata: NavBarDataProps[] = [
  { title_FR: 'Acceuil', title_EN: 'Home', link: '/' },
  { title_FR: ' Formations', title_EN: 'Formations', link: '/formations' },
  { title_FR: ' Compétences', title_EN: 'Skills', link: '/skills' },
  { title_FR: 'Experiences', title_EN: 'Experiences', link: '/experiences' },
  { title_FR: 'Projets', title_EN: 'Projects', link: '/projects' },
  // { title_FR: ' A propos !', title_EN: 'About', link: '/formation/:id' },
];

const builder = imageUrlBuilder(sanityClient);
export const CSS = `margin : auto`;
export const urlFor = (source: any) => {
  return builder.image(source);
};

export const getYear = (date: Date) => {
  return new Date(date).getFullYear();
};
export const getMonth = (date: Date) => {
  return new Date(date).getMonth();
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
  formation_got: {
    classes: {
      fr: 'Classes principales',
      en: 'Main classes',
    },
    acquis: {
      fr: 'Acquis',
      en: 'Acquired',
    },
  },
  skill: {
    fr: 'Compétences',
    en: 'Skills',
  },
};

export const blockContentToJsx = (blocks: any): string => {
  let jsx = `<div class='blockContent'>`;
  console.log('blocks', blocks);
  if (blocks) {
    for (const block of blocks) {
      jsx += `<${block.children[0]._type}>${block.children[0].text}</${block.children[0]._type}><br/><br/>`;
    }
  }

  jsx += `</div>`;
  return jsx;
};
