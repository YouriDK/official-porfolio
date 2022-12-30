import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import Flag from 'react-world-flags';
import { Nav, Navbar, NavItem } from 'reactstrap';
import { setLang } from '../redux/structure/actions';
import '../scss/Global.scss';
import '../scss/Navbar.scss';
import { NavBarDataProps } from '../tools/model';
import { Navbardata } from '../tools/utils';
// import 'bootstrap/dist/css/bootstrap.min.css';

const NavBarMobile: FC<any> = (): JSX.Element => {
  const langage = useSelector((state: any) => state.lang);
  const { lang } = langage;
  const history = useHistory();

  const [pageSelected, setPageSelected] = useState<any>({});
  const [visible, setVisible] = useState<boolean>(false);
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
    console.log('Mobile', window.innerWidth);
    console.log('location full', history.location);
    console.log('location', history.location.pathname);
    console.log('location split', history.location.pathname.split('/')[1]);
    setPageSelected(
      Navbardata.find(
        (data: NavBarDataProps) =>
          data.link === `/${history.location.pathname.split('/')[1]}`
      )
    );
  }, [history, history.location.pathname]);

  return (
    <header className='navbar'>
      <Navbar>
        <Nav
          style={{
            listStyleType: 'none',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              //  listStyleType: 'none',
              display: 'flex',
              flexDirection: 'column',
              //  flexWrap: 'wrap',
            }}
          >
            <NavItem
              className='navitem'
              style={{ display: visible ? 'none' : '' }}
            >
              <NavLink
                aria-disabled
                className='navlink hoverable big-title'
                to={pageSelected?.link ?? ''}
                onClick={() => setVisible(!visible)}
              >
                {(pageSelected as any)[switchLang]}
              </NavLink>
            </NavItem>
            <Nav
              style={{
                listStyleType: 'none',
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'wrap',
              }}
            >
              {visible &&
                Navbardata.map((nav: NavBarDataProps, index: number) => (
                  <NavItem
                    key={index}
                    /* className='navitem'*/ style={{ minHeight: '2rem' }}
                  >
                    <NavLink
                      className='navlink hoverable big-title'
                      to={nav.link}
                      onClick={() => setVisible(!visible)}
                    >
                      {(nav as any)[switchLang]}
                    </NavLink>
                  </NavItem>
                ))}
            </Nav>
          </div>
          <div style={{ display: 'flex', marginTop: '5px', top: '0px' }}>
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
                style={{ verticalAlign: 'middle', marginTop: '5px' }}
                onClick={() => dispatch(setLang(lang === 'FR' ? 'GBR' : 'FR'))}
                code={lang === 'FR' ? 'GBR' : 'FR'}
                height='22'
              />
            </NavItem>
          </div>
        </Nav>
      </Navbar>
    </header>
  );
};

export default NavBarMobile;
