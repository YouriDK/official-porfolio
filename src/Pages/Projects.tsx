import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import LoadingBox from '../components/LoadingBox';
import XpCard from '../components/XpCard';

import { getXp } from '../redux/structure/actions';
import { IExperience } from '../tools/model';

const Projects: FC<any> = (): JSX.Element => {
  const dispatch = useDispatch();
  const xp_store = useSelector((state: any) => state.xp);
  const lang_store = useSelector((state: any) => state.lang);
  const { loading, xp, error } = xp_store;
  const { lang } = lang_store;

  useEffect(() => {
    dispatch(getXp);
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <LoadingBox Icon color='#4c956c' size={150} />
      ) : error ? (
        <>{error} </>
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
          }}
        >
          {xp
            .sort((a: any, b: any) => (a.order > b.order ? -1 : 1))
            .filter(
              (xp: IExperience) =>
                xp.domaine_fr === 'Autodidacte' ||
                xp.domaine_fr === 'Projet-Professionnel'
            )
            .map((xp: IExperience, index: number) => (
              <XpCard xp={xp} key={index} lang={lang} />
            ))}
        </div>
      )}
    </>
  );
};
export default Projects;
