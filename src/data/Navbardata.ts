export interface NavBarDataProps {
  title_FR: string;
  title_EN: string;
  link: string;
  className?: string;
  activeClassName?: string;
}

export const Navbardata: NavBarDataProps[] = [
  { title_FR: 'Acceuil', title_EN: 'Home', link: '/' },
  { title_FR: ' Formations', title_EN: 'Formations', link: '/formations' },
  { title_FR: 'Experiences', title_EN: 'Experiences', link: '/experiences' },
  { title_FR: ' A propos !', title_EN: 'About', link: '/formation/:id' },
];
