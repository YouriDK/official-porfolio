import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ClimbingBoxLoader } from 'react-spinners';
import { Card } from '../components/Card';

import { getXp } from '../redux/structure/actions';
import { experience } from '../tools/model';
import { CSS } from '../tools/utils';

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
        <ClimbingBoxLoader color='#2ec4b6' loading css={CSS} size={30} />
      ) : error ? (
        <>{error} </>
      ) : (
        <>
          {xp
            .filter((xp: experience) => xp.domaine_fr === 'Autodidacte')
            .map((xp: experience, index: number) => (
              <Card xp={xp} key={index} lang={lang} />
            ))}
        </>
      )}
    </>
  );
};
export default Projects;
