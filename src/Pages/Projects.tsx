import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from '../components/Card';
import LoadingBox from '../components/LoadingBox';

import { getXp } from '../redux/structure/actions';
import { experience } from '../tools/model';

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
        <>
          {xp
            .sort((a: any, b: any) => (a.order > b.order ? -1 : 1))
            .filter(
              (xp: experience) =>
                xp.domaine_fr === 'Autodidacte' ||
                xp.domaine_fr === 'Projet-Professionnel'
            )
            .map((xp: experience, index: number) => (
              <Card xp={xp} key={index} lang={lang} />
            ))}
        </>
      )}
    </>
  );
};
export default Projects;
