import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '../client';
import { INavBarDataProps } from './model';

export const Navbardata: INavBarDataProps[] = [
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
  xp_title: { fr: 'Parcours Professionnel', en: 'Professionnal career' },
  xp_sub_title: { fr: 'Experience acquis', en: 'Experience acquired' },
  details_bouton: {
    fr: `Plus d'infos`,
    en: 'More infos',
  },
  check: {
    fr: `Visiter ici ! `,
    en: 'Check here ! ',
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
  skills: {
    title: { fr: 'Compétences techniques', en: 'Technical skills' },
    main: { fr: 'Stack principale', en: 'Main stack' },
    solide: { fr: 'Experience solide', en: 'Solid experience' },
    knowlegde: { fr: 'Connaissances', en: 'Knowledge' },
  },
  projects: {
    title: { fr: 'Projets', en: 'Projects' },
    // subtitle: { fr: 'Projets', en: 'Projects' },
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

export const textVariant = (delay: any) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export const styles = {
  paddingX: 'sm:px-16 px-6',
  paddingY: 'sm:py-16 py-6',
  padding: 'sm:px-16 px-6 sm:py-16 py-10',

  heroHeadText:
    'font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2',
  heroSubText:
    'text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]',

  sectionHeadText:
    'text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]',
  sectionSubText:
    'sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider',
};
