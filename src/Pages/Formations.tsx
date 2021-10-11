import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
import { Card } from '../components/Card';
import { getFormations } from '../redux/structure/actions';
import { CSS } from '../tools/utils';

export const Formations: FC<any> = (): JSX.Element => {
  const dispatch = useDispatch();
  const formations_store = useSelector((state: any) => state.formations);
  const lang_store = useSelector((state: any) => state.lang);
  const { loading, formations, error } = formations_store;
  const { lang } = lang_store;

  useEffect(() => {
    dispatch(getFormations);
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <ClimbingBoxLoader color='#2ec4b6' loading css={CSS} size={30} />
      ) : error ? (
        <>{error} </>
      ) : (
        <>
          {formations
            .sort((a: any, b: any) => (a.order > b.order ? -1 : 1))
            .map((formation: any, index: number) => (
              <Card formation={formation} key={index} lang={lang} />
            ))}
        </>
      )}
    </>
  );
};
