import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FormationCard from '../components/FormationCard';
import LoadingBox from '../components/LoadingBox';
import { getFormations } from '../redux/structure/actions';
import Timeline from '../components/TimeLine/TimeLine';
import { Section } from '../styles/GlobalComponents.style';

export const Formations: FC<any> = (): JSX.Element => {
  const dispatch = useDispatch();
  const isMobile = useSelector((state: any) => state.isMobile.isMobile);
  const formations_store = useSelector((state: any) => state.formations);
  const lang_store = useSelector((state: any) => state.lang);
  const { loading, formations, error } = formations_store;
  let formationSorted: [];
  const { lang } = lang_store;
  const TimeLineData = [
    { year: 2017, text: 'Started my journey' },
    { year: 2018, text: 'Worked as a freelance developer' },
    { year: 2019, text: 'Founded JavaScript Mastery' },
    { year: 2020, text: 'Shared my projects with the world' },
    { year: 2021, text: 'Started my own platform' },
  ];

  useEffect(() => {
    dispatch(getFormations);
    console.log('formations', formations);
  }, [dispatch]);
  useEffect(() => {
    console.log('formations', formations);
  }, [formations]);
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
