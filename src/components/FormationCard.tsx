import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'reactstrap';
import '../scss/Card.scss';
import { formations } from '../tools/model';
import { getYear, texte } from '../tools/utils';
import { IoMdStarOutline } from 'react-icons/io';
import { useSelector } from 'react-redux';
export interface FormationCardProps {
  formation: formations;
  lang: string;
  index: number;
}
const FormationCard: FC<any> = ({
  formation,
  lang,
}: FormationCardProps): JSX.Element => {
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
            <span className='title' style={{ lineHeight: '2em' }}>
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
          {!isMobile && (
            <li>
              <span>
                {lang === 'FR' ? formation.school_fr : formation.school_en}
              </span>
            </li>
          )}
          {!isMobile && (
            <li>
              <span>{formation.place}</span>
            </li>
          )}
        </ul>
      </div>

      <NavLink to={`/formations/${formation._id}`} className='navlink'>
        <Button className='btn' style={{ margin: 'auto', cursor: 'pointer' }}>
          <span>
            {lang === 'FR' ? texte.details_bouton.fr : texte.details_bouton.en}
          </span>
        </Button>
      </NavLink>
    </div>
  );
};
export default FormationCard;
