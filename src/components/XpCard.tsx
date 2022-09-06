import { FC } from 'react';
import { BsQuestionCircle } from 'react-icons/bs';
import { IoMdStarOutline } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import { Button } from 'reactstrap';
import '../scss/Card.scss';
import { experience } from '../tools/model';
import { getMonth, getYear, texte } from '../tools/utils';

export interface XpCardProps {
  xp: experience;
  index?: number;
  lang: string;
}
const XpCard: FC<XpCardProps> = ({ lang, xp }: XpCardProps): JSX.Element => {
  return (
    <div
      className='card'
      style={{
        width: '500px',
        flexWrap: 'wrap',
      }}
    >
      <IoMdStarOutline
        size={40}
        style={{ margin: 'auto' }}
        className='primary'
      />
      <div className='features'>
        <ul>
          <li>
            <span className='title'>
              {lang === 'FR' ? xp.name_fr : xp.name_en}
            </span>
          </li>
          <li>
            <span>{xp.entreprise}</span>
          </li>
        </ul>
      </div>

      <div className='features'>
        <ul>
          {xp.from && (
            <li>
              {lang === 'FR' ? (
                <span>
                  De {getMonth(xp.from, true, lang)} {getYear(xp.from)} à{' '}
                  {getMonth(xp.to, true, lang)} {getYear(xp.to)}
                </span>
              ) : (
                <span>
                  From {getMonth(xp.from, true, lang)} {getYear(xp.from)} to{' '}
                  {getMonth(xp.to, true, lang)} {getYear(xp.to)}
                </span>
              )}
            </li>
          )}

          <li>
            <span> {lang === 'FR' ? xp.domaine_fr : xp.domaine_en}</span>
          </li>
          <li>
            <span>{lang === 'FR' ? xp.project_fr : xp.project_en}</span>
          </li>
        </ul>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <NavLink
          to={
            xp.domaine_fr === 'Autodidacte' ||
            xp.domaine_fr === 'Projet-Professionnel'
              ? `/projects/${xp._id}`
              : `/experiences/${xp._id}`
          }
          className='navlink'
        >
          <Button className='btn' style={{ cursor: 'pointer' }}>
            {lang === 'FR' ? texte.details_bouton.fr : texte.details_bouton.en}

            <BsQuestionCircle
              style={{ marginLeft: '10px', paddingTop: '5px' }}
            />
          </Button>
        </NavLink>
        {xp?.link && (
          <Button outline color='link' style={{ float: 'right' }}>
            <a href={xp.link} target='_blank' rel='noreferrer' className='link'>
              {' '}
              {lang === 'FR' ? `Visitez ici` : `Check Here`}{' '}
            </a>
          </Button>
        )}
      </div>
    </div>
  );
};
export default XpCard;
