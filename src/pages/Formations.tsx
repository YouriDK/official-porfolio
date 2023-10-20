import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Timeline from '../components/timeLine/TimeLine';
import { getFormations } from '../redux/structure/actions';
import { AppDispatch } from '../redux/store';

export const Formations: FC<any> = (): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();
  const formations_store = useSelector((state: any) => state.formations);
  const { loading, formations } = formations_store;

  useEffect(() => {
    dispatch(getFormations);
  }, [dispatch]);

  return (
    <>
      {!loading && (
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
