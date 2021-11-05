import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from '../components/Card';
import LoadingBox from '../components/LoadingBox';
import { getFormations } from '../redux/structure/actions';

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
        <LoadingBox Icon color='#4c956c' size={150} />
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
