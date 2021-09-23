import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getFormationsWithId } from '../redux/structure/actions';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
import { CSS } from '../tools/utils';

export const Formation: FC<any> = (): JSX.Element => {
  const { id }: any = useParams();
  const dispatch = useDispatch();
  const formation_store = useSelector((state: any) => state.formation);
  const lang_store = useSelector((state: any) => state.lang);
  const { loading, formation, error } = formation_store;

  useEffect(() => {
    dispatch(getFormationsWithId(id));
    console.log('formation', formation);
    console.log('formation_store', formation_store);
    console.log('lang_store', lang_store);
  }, []);
  return (
    <>
      {loading ? (
        <ClimbingBoxLoader color='#2ec4b6' loading css={CSS} size={30} />
      ) : error ? (
        <>{error} </>
      ) : (
        <>{formation.title_fr}</>
      )}
    </>
  );
};
