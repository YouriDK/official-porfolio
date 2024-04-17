import { FC, useEffect, useState } from 'react';
import { DiCssdeck } from 'react-icons/di';
import { useDispatch, useSelector } from 'react-redux';
import Flag from 'react-world-flags';
import {
  Container,
  DropDown,
  DropDownContent,
  DropDownTrigger,
  LeftSide,
  MiddleSide,
  NavLinkCustom,
  RightSide,
  SocialIcons,
} from './Header.style';
import MenuSVG from './MenuSVG';

import { AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import { INavBarDataProps } from '../../Types/Interfaces';
import { AppDispatch } from '../../redux/store';
import { setLang } from '../../redux/structure/actions';
import { Navbardata } from '../../tools/utils';
// TODO  Change title_FR to FR ( same for title_EN)
const Header: FC<any> = (): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();
  const langage = useSelector((state: any) => state.lang);
  const { lang } = langage;
  const [switchLang, setswitchLang] = useState('title_FR');
  const [smallScreen, setSmallScreen] = useState(window.innerWidth < 938);

  useEffect(() => {
    window.addEventListener('resize', () =>
      setSmallScreen(window.innerWidth < 938)
    );
    return () => {
      window.removeEventListener('resize', () =>
        setSmallScreen(window.innerWidth < 938)
      );
    };
  }, []);

  useEffect(() => {
    setswitchLang(lang === 'FR' ? 'title_FR' : 'title_EN');
  }, [lang]);

  return (
    <Container>
      <LeftSide>
        <a
          href='/'
          style={{ display: 'flex', alignItems: 'center', color: 'white' }}
        >
          <DiCssdeck size='4rem' /> <span>Profil</span>
        </a>
      </LeftSide>
      <MiddleSide>
        {!smallScreen ? (
          Navbardata.map((nav: INavBarDataProps, index: number) => (
            <li key={index}>
              <NavLinkCustom className='link hoverable' href={nav.link}>
                {(nav as any)[switchLang]}
              </NavLinkCustom>
            </li>
          ))
        ) : (
          <DropDown>
            <DropDownTrigger>
              <MenuSVG />
            </DropDownTrigger>
            <DropDownContent className='DropDownContentName'>
              {' '}
              {Navbardata.map((nav: INavBarDataProps, index: number) => (
                <li key={index}>
                  <NavLinkCustom className='link hoverable' href={nav.link}>
                    {(nav as any)[switchLang]}
                  </NavLinkCustom>
                </li>
              ))}{' '}
            </DropDownContent>
          </DropDown>
        )}
      </MiddleSide>
      <RightSide>
        <SocialIcons
          href='https://linkedin.com/in/youri-choucoutou-690522142'
          target='_blank'
        >
          {' '}
          <AiFillLinkedin size='3rem' />{' '}
        </SocialIcons>
        <SocialIcons
          href='https://mail.google.com/mail/?view=cm&fs=1&to=youri.choucoutou@gmail.com'
          target='_blank'
        >
          {' '}
          <AiFillMail size='3rem' />{' '}
        </SocialIcons>
        <SocialIcons>
          <Flag
            style={{ verticalAlign: 'middle' }}
            onClick={() => dispatch(setLang(lang === 'FR' ? 'GBR' : 'FR'))}
            code={lang === 'FR' ? 'GBR' : 'FR'}
            height='22'
          />
        </SocialIcons>
      </RightSide>
    </Container>
  );
};
export default Header;
