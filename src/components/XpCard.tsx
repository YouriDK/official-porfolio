import { FC } from 'react';
import { BsQuestionCircle } from 'react-icons/bs';
import { IoMdStarOutline } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Button } from 'reactstrap';
import '../scss/Card.scss';
import { IExperience } from '../Types/Interfaces';
import { getMonth, getYear, texte } from '../tools/utils';
// ! File to delete
export interface XpCardProps {
  xp: IExperience;
  index?: number;
  lang: string;
}
const XpCard: FC<XpCardProps> = ({ lang, xp }: XpCardProps): JSX.Element => {
  const isMobile = useSelector((state: any) => state.isMobile.isMobile);

  return (
    <div
      className='card'
      style={{
        width: isMobile ? '350px' : '500px',
        flexWrap: 'wrap',
      }}
    >
      {!isMobile && (
        <IoMdStarOutline
          size={40}
          style={{ margin: 'auto' }}
          className='primary'
        />
      )}
      <div className='features'>
        <ul>
          <li>
            <span
              className='title'
              style={{ lineHeight: isMobile ? '1.25em' : '' }}
            >
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
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexDirection: isMobile ? 'column' : 'row',
        }}
      >
        <NavLink
          to={
            xp.domaine_fr === 'Autodidacte' ||
            xp.domaine_fr === 'Projet-Professionnel'
              ? `/projects/${xp._id}`
              : `/experiences/${xp._id}`
          }
          className='navlink'
        >
          <Button
            className='btn'
            style={{
              cursor: 'pointer',
              display: isMobile ? 'initial' : 'block',
            }}
          >
            {lang === 'FR' ? texte.details_bouton.fr : texte.details_bouton.en}

            <BsQuestionCircle
              style={{ marginLeft: '10px', paddingTop: '5px' }}
            />
          </Button>
        </NavLink>
      </div>
    </div>
  );
};
export default XpCard;
