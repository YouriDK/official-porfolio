import React, { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import Flag from 'react-world-flags';
import { Navbardata, NavBarDataProps } from '../data/Navbardata';

const Navbar: FC<any> = (props: any): JSX.Element => {
  const [lang, setLang] = useState('FR');
  const linkedin_url = 'https://linkedin.com/in/youri-choucoutou-690522142';
  const ChangeLang = (params: any) => {
    setLang(params);
    props.onChangeLang(params);
  };
  return (
    <header>
      {lang === 'FR'
        ? Navbardata.map((nav: NavBarDataProps) => (
            <NavLink to={nav.link}>{nav.title_FR}</NavLink>
          ))
        : Navbardata.map((nav: NavBarDataProps) => (
            <NavLink to={nav.link}>{nav.title_EN}</NavLink>
          ))}
      <SocialIcon
        url={linkedin_url}
        className='icon'
        target='_blank'
        fgColor='#fff'
        style={{ height: 42, width: 42 }}
      />
      <Flag onClick={() => ChangeLang('EN')} code='GBR' height='22' />
    </header>
  );
};

export default Navbar;
