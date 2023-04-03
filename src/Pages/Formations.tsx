import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from '../components/LoadingBox';
import Timeline from '../components/TimeLine/TimeLine';
import { getFormations } from '../redux/structure/actions';

export const Formations: FC<any> = (): JSX.Element => {
  const dispatch = useDispatch();
  const formations_store = useSelector((state: any) => state.formations);
  const { loading, formations, error } = formations_store;

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
        <div style={{ marginTop: '20%' }}>
          <Timeline
            TimeLineData={formations.sort((a: any, b: any) =>
              a.order > b.order ? 1 : -1
            )}
          />
        </div>
      )}
    </>
  );
};
