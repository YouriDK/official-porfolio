import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import Flag from 'react-world-flags';
import { Navbardata, NavBarDataProps } from '../data/Navbardata';
import { Navbar, Nav, NavItem } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setLang } from '../redux/structure/actions';
import '../scss/Global.scss';
import '../scss/Navbar.scss';
const Nav_bar: FC<any> = (): JSX.Element => {
  const langage = useSelector((state: any) => state.lang);
  const { lang } = langage;
  const dispatch = useDispatch();
  const linkedin_url = 'https://linkedin.com/in/youri-choucoutou-690522142';

  return (
    <header className='navbar'>
      <Navbar>
        <Nav
          style={{
            listStyleType: 'none',
            display: 'flex',
          }}
        >
          {lang === 'FR'
            ? Navbardata.map((nav: NavBarDataProps, index: number) => (
                <NavItem key={index} className='navitem'>
                  <NavLink className='navlink hoverable' to={nav.link}>
                    {nav.title_FR}
                  </NavLink>
                </NavItem>
              ))
            : Navbardata.map((nav: NavBarDataProps, index: number) => (
                <NavItem key={index} className='navitem'>
                  <NavLink className='navlink hoverable' to={nav.link}>
                    {nav.title_EN}
                  </NavLink>
                </NavItem>
              ))}
          <NavItem className='navitem hoverable'>
            <SocialIcon
              url={linkedin_url}
              className='icon'
              target='_blank'
              fgColor='#fff'
              style={{ height: 42, width: 42 }}
            />
          </NavItem>
          <NavItem className='navitem hoverable'>
            <Flag
              onClick={() => dispatch(setLang(lang === 'FR' ? 'GBR' : 'FR'))}
              code={lang === 'FR' ? 'GBR' : 'FR'}
              height='22'
            />
          </NavItem>
        </Nav>
      </Navbar>
    </header>
  );
};

export default Nav_bar;
