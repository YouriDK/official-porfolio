import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'reactstrap';
import { experience, formations } from '../tools/model';
import { getMonth, getYear, texte } from '../tools/utils';
import '../scss/Card.scss';
export interface CardProps {
  xp?: experience;
  formation?: formations;
  index?: number;
  lang: string;
}
export const Card: FC<CardProps> = ({
  formation,
  lang,
  xp,
}: CardProps): JSX.Element => {
  return formation ? (
    <div className='card'>
      <div className='icon'>
        <svg
          enableBackground='new 0 0 512 512'
          height='512px'
          id='Layer_1'
          version='1.1'
          viewBox='0 0 512 512'
          width='512px'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M316.01,199.02L256.134,14.817L196.239,199.02H1.134l158.102,113.324L98.53,496.487l157.604-114.232  l157.585,114.232l-60.687-184.143L511.134,199.02H316.01z M335.084,318.257l42.407,128.63L267.22,366.963l-11.086-8.033  l-11.086,8.033l-110.291,79.923l42.408-128.63l4.353-13.18l-11.289-8.08L59.903,217.909h136.336h13.724l4.242-13.051l41.929-128.957  l41.91,128.957l4.242,13.051h13.724h136.336l-110.327,79.088l-11.27,8.08L335.084,318.257z'
            fill='#37404D'
          />
        </svg>
      </div>

      <div className='features'>
        <ul>
          <li>
            <span className='title'>
              {lang === 'FR' ? formation.title_fr : formation.title_en}
            </span>
          </li>
          <li>
            <span>
              {' '}
              {lang === 'FR' ? formation.specialite : formation.major}
            </span>
          </li>
        </ul>
      </div>

      <div className='features'>
        <ul>
          <li>
            {lang === 'FR' ? (
              <span>
                De {getYear(formation.from)} à {getYear(formation.to)}
              </span>
            ) : (
              <span>
                From {getYear(formation.from)} to {getYear(formation.to)}
              </span>
            )}
          </li>
          <li>
            <span>
              {' '}
              {lang === 'FR' ? formation.school_fr : formation.school_en}
            </span>
          </li>
          <li>
            <span>{formation.place}</span>
          </li>
        </ul>
      </div>
      <NavLink to={`/formations/${formation._id}`} className='navlink'>
        <Button className='btn'>
          <span>
            {lang === 'FR' ? texte.details_bouton.fr : texte.details_bouton.en}
          </span>
        </Button>
      </NavLink>
    </div>
  ) : xp ? (
    <div className='card'>
      <div className='icon'>
        <svg
          enable-background='new 0 0 512 512'
          height='512px'
          id='Layer_1'
          version='1.1'
          viewBox='0 0 512 512'
          width='512px'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M285.928,113.067c62.492,0,113.327,50.827,113.327,113.327c0,0.344-0.041,0.705-0.066,1.049  c-0.049,0.836-0.107,1.672-0.123,2.525l-0.426,17.133l17.159,0.065c41.53,0.115,75.313,34.005,75.313,75.535  c0,41.415-33.718,75.305-75.157,75.518l-3.664,0.016H104.977c-46.244-0.049-83.872-37.693-83.872-83.929  c0-35.825,22.806-67.714,56.737-79.356l9.444-3.229l1.664-9.838c4.115-24.282,24.97-41.907,49.588-41.907  c7.846,0,15.428,1.82,22.536,5.394l15.306,7.689l7.386-15.444C202.531,138.398,242.635,113.067,285.928,113.067 M285.928,96.277  c-51.778,0-96.358,30.315-117.303,74.092c-9.059-4.558-19.256-7.182-30.086-7.182c-33.233,0-60.762,24.184-66.14,55.893  C32.82,232.657,4.316,270.104,4.316,314.307c0,55.597,45.063,100.669,100.644,100.718h311.084v-0.016  c50.777-0.263,91.856-41.481,91.856-92.308c0-50.909-41.177-92.177-92.053-92.324c0.033-1.344,0.197-2.639,0.197-3.984  C416.044,154.532,357.79,96.277,285.928,96.277L285.928,96.277z'
            fill='#37404D'
          />
        </svg>
      </div>

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
      <div></div>

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
      <NavLink
        to={
          xp.domaine_fr === 'Autodidacte'
            ? `/projects/${xp._id}`
            : `/experiences/${xp._id}`
        }
        className='navlink'
      >
        <Button className='btn'>
          <span>
            {lang === 'FR' ? texte.details_bouton.fr : texte.details_bouton.en}
          </span>
        </Button>
      </NavLink>
    </div>
  ) : (
    <span>Vide Ni**a</span>
  );
};
