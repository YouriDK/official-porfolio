import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IExperience } from '../Types/Interfaces';
import ExperienceCard from '../components/experienceCard/ExperienceCard';
import { getExperiences } from '../redux/structure/actions';
import { styles, texte } from '../tools/utils';

export const Experiences: FC<any> = (props: any): JSX.Element => {
  const dispatch = useDispatch();
  const xp_store = useSelector((state: any) => state.xp);
  const lang_store = useSelector((state: any) => state.lang);
  const { loading, xp, error } = xp_store;
  const { lang } = lang_store;

  useEffect(() => {
    dispatch(getExperiences);
  }, [dispatch]);

  return (
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
  );
};
