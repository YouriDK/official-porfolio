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
export const getMonth = (date: Date, type?: boolean, lang?: string) => {
  const Mois = [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
  ];
  const Month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  if (type) {
    return lang === 'FR'
      ? Mois[new Date(date).getMonth()]
      : Month[new Date(date).getMonth()];
  }
  return new Date(date).getMonth();
};

export const texte = {
  modo: {
    fr: "Le code, c'est comme l'humour. Si il faut l'expliquer c'est que c'est mauvais.",
    en: "Coding is like humour. If you have to explain it, it's bad.",
  },
  details_bouton: {
    fr: `Plus d'infos`,
    en: 'More infos',
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
  xp: {
    env: {
      fr: 'Environnement',
      en: 'Environment',
    },
    task: {
      fr: 'Tâches principales',
      en: 'Main tasks',
    },
  },
};

export const blockContentToJsx = (blocks: any): string => {
  let jsx = `<div class='blockContent'>`;
  console.log('blocks', blocks);
  if (blocks) {
    for (const block of blocks) {
      jsx += `<${block.children[0]._type}>${block.children[0].text}</${block.children[0]._type}>`;
    }
  }

  jsx += `</div>`;
  return jsx;
};
