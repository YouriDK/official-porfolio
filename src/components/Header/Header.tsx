import React, { FC, useEffect, useState } from 'react';
import {
  Container,
  LeftSide,
  MiddleSide,
  NavLinkCustom,
  RightSide,
  SocialIcons,
} from './Header.style';
import { DiCssdeck } from 'react-icons/di';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Flag from 'react-world-flags';

import { INavBarDataProps } from '../../tools/model';
import { AiFillMail, AiFillLinkedin } from 'react-icons/ai';
import { Navbardata } from '../../tools/utils';
import { setLang } from '../../redux/structure/actions';

const Header: FC<any> = (): JSX.Element => {
  const langage = useSelector((state: any) => state.lang);
  const { lang } = langage;
  const [switchLang, setswitchLang] = useState('title_FR');
  const dispatch = useDispatch();
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
          <DiCssdeck size='3rem' /> <span>Profil</span>
        </a>
      </LeftSide>
      <MiddleSide>
        {Navbardata.map((nav: INavBarDataProps, index: number) => (
          <li key={index}>
            {/* <NavLink className='navlink hoverable big-title' to={nav.link}> */}
            <NavLinkCustom className='link hoverable  ' href={nav.link}>
              {(nav as any)[switchLang]}
            </NavLinkCustom>
            {/* </NavLink> */}
          </li>
        ))}
      </MiddleSide>
      <RightSide>
        <SocialIcons href='https://linkedin.com/in/youri-choucoutou-690522142'>
          {' '}
          <AiFillLinkedin size='3rem' />{' '}
        </SocialIcons>
        <SocialIcons href='https://mail.google.com/mail/?view=cm&fs=1&to=youri.choucoutou@gmail.com'>
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
