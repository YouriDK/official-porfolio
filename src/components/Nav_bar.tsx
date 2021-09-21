import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import Flag from 'react-world-flags';
import { Navbardata, NavBarDataProps } from '../data/Navbardata';
import {
  // Collapse,
  Navbar,
  // NavbarToggler,
  // NavbarBrand,
  Nav,
  NavItem,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  // NavbarText,
} from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setLang } from '../redux/structure/actions';

const Nav_bar: FC<any> = (): JSX.Element => {
  const langage = useSelector((state: any) => state.lang);
  const { lang } = langage;
  const dispatch = useDispatch();
  const linkedin_url = 'https://linkedin.com/in/youri-choucoutou-690522142';

  return (
    <header>
      <Navbar>
        <Nav navbar>
          {lang === 'FR'
            ? Navbardata.map((nav: NavBarDataProps, index: number) => (
                <NavItem key={index}>
                  <NavLink to={nav.link}>{nav.title_FR}</NavLink>
                </NavItem>
              ))
            : Navbardata.map((nav: NavBarDataProps, index: number) => (
                <NavItem key={index}>
                  <NavLink to={nav.link}>{nav.title_EN}</NavLink>
                </NavItem>
              ))}
          <NavItem>
            <SocialIcon
              url={linkedin_url}
              className='icon'
              target='_blank'
              fgColor='#fff'
              style={{ height: 42, width: 42 }}
            />
          </NavItem>
          <NavItem>
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
