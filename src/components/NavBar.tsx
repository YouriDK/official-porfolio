import React, { FC, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import Flag from 'react-world-flags';
import { Navbar, Nav, NavItem } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setLang } from '../redux/structure/actions';
import { Navbardata } from '../tools/utils';
import { NavBarDataProps } from '../tools/model';
import '../scss/Global.scss';
import '../scss/Navbar.scss';

const NavBar: FC<any> = (): JSX.Element => {
  const langage = useSelector((state: any) => state.lang);
  const { lang } = langage;
  const [switchLang, setswitchLang] = useState('title_FR');
  const dispatch = useDispatch();
  const linkedin_url = 'https://linkedin.com/in/youri-choucoutou-690522142';
  const mail_url =
    'https://mail.google.com/mail/?view=cm&fs=1&to=youri.choucoutou@gmail.com';

  // const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    setswitchLang(lang === 'FR' ? 'title_FR' : 'title_EN');
  }, [lang]);
  useEffect(() => {
    console.log('Pas mobile', window.innerWidth);
  }, []);

  return (
    <header className='navbar'>
      <Navbar>
        <Nav
          style={{
            listStyleType: 'none',
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          {Navbardata.map((nav: NavBarDataProps, index: number) => (
            <NavItem key={index} className='navitem'>
              <NavLink className='navlink hoverable big-title' to={nav.link}>
                {(nav as any)[switchLang]}
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
            <SocialIcon
              url={mail_url}
              className='icon'
              target='_blank'
              fgColor='#fff'
              style={{ height: 42, width: 42 }}
            />
          </NavItem>
          <NavItem className='navitem hoverable'>
            <Flag
              style={{ verticalAlign: 'middle' }}
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

export default NavBar;
