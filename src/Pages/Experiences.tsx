import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ExperienceCard from '../components/ExperienceCard/ExperienceCard';
import LoadingBox from '../components/LoadingBox';
import XpCard from '../components/XpCard';
import { getXp } from '../redux/structure/actions';
import { IExperience } from '../tools/model';
import { texte, styles } from '../tools/utils';

export const Experiences: FC<any> = (props: any): JSX.Element => {
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
      {loading || xp.lenght === 0 ? (
        <LoadingBox Icon color='#4c956c' size={150} />
      ) : error ? (
        <>{error} </>
      ) : (
        <>
          <>
            <>
              <p className={`${styles.sectionSubText} text-center`}>
                {lang === 'FR' ? texte.xp_title.fr : texte.xp_title.en}
              </p>
              <h2 className={`${styles.sectionHeadText} text-center`}>
                {lang === 'FR' ? texte.xp_sub_title.fr : texte.xp_sub_title.en}
              </h2>
            </>

            <div className='mt-20 flex flex-col'>
              <VerticalTimeline>
                {xp
                  .sort((a: any, b: any) => (a.order > b.order ? -1 : 1))
                  .filter(
                    (xp: IExperience) =>
                      xp.domaine_fr !== 'Autodidacte' &&
                      xp.domaine_fr !== 'Projet-Professionnel'
                  )
                  .map((experience: any, index: any) => (
                    <ExperienceCard
                      key={`experience-${index}`}
                      experience={experience}
                    />
                  ))}
              </VerticalTimeline>
            </div>
          </>
        </>
      )}
    </>
  );
};
