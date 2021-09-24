import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getFormationsWithId } from '../redux/structure/actions';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
import { CSS, getYear } from '../tools/utils';
import '../scss/Formation.scss';

export const Formation: FC<any> = (): JSX.Element => {
  const { id }: any = useParams();
  const dispatch = useDispatch();
  const formation_store = useSelector((state: any) => state.formation);
  const lang_store = useSelector((state: any) => state.lang);
  const { loading, formation, error } = formation_store;
  const { lang } = lang_store;

  useEffect(() => {
    dispatch(getFormationsWithId(id));
  }, []);
  return (
    <>
      {loading ? (
        <ClimbingBoxLoader color='#2ec4b6' loading css={CSS} size={30} />
      ) : error ? (
        <>{error} </>
      ) : (
        <>
          <span className='title'>
            {lang === 'FR' ? formation.title_fr : formation.title_en}
          </span>
          <span className='title'>
            {lang === 'FR' ? formation.specialite : formation.major}
          </span>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              marginTop: '35px',
            }}
          >
            <ul>
              <li>
                {lang === 'FR' ? formation.school_fr : formation.school_en}
              </li>
              {lang === 'FR' ? (
                <li>
                  De {getYear(formation.from)} à {getYear(formation.to)}
                </li>
              ) : (
                <li>
                  From {getYear(formation.from)} to {getYear(formation.to)}
                </li>
              )}

              <li></li>
            </ul>
            <p>
              {lang === 'FR'
                ? formation.description_fr
                : formation.description_en}
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              marginTop: '35px',
            }}
          >
            <ul>
              <span className='title'>Cours</span>
              <br />
              {lang === 'FR' ? (
                <>
                  {formation.classes_fr &&
                    formation.classes_fr.map((classe: string) => (
                      <span>{classe}</span>
                    ))}
                </>
              ) : (
                <>
                  {formation.classes_en &&
                    formation.classes_en.map((classe: string) => (
                      <span>{classe}</span>
                    ))}
                </>
              )}
            </ul>
            <ul>
              <span className='title'>Acquis</span>
              <br />
              {lang === 'FR' ? (
                <>
                  {formation.knowledges_fr &&
                    formation.knowledges_fr.map((know: string) => (
                      <span>{know}</span>
                    ))}
                </>
              ) : (
                <>
                  {formation.knowledges_en &&
                    formation.knowledges_en.map((know: string) => (
                      <span>{know}</span>
                    ))}
                </>
              )}
            </ul>
          </div>
        </>
      )}
    </>
  );
};
