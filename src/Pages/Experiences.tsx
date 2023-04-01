import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from '../components/LoadingBox';
import XpCard from '../components/XpCard';
import { getXp } from '../redux/structure/actions';
import { IExperience } from '../tools/model';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { textVariant } from '../tools/utils';
import ExperienceCard from '../components/ExperienceCard';
const styles = {
  paddingX: 'sm:px-16 px-6',
  paddingY: 'sm:py-16 py-6',
  padding: 'sm:px-16 px-6 sm:py-16 py-10',

  heroHeadText:
    'font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2',
  heroSubText:
    'text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]',

  sectionHeadText:
    'text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]',
  sectionSubText:
    'sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider',
};

export const Experiences: FC<any> = (props: any): JSX.Element => {
  const dispatch = useDispatch();
  const xp_store = useSelector((state: any) => state.xp);
  const lang_store = useSelector((state: any) => state.lang);
  const { loading, xp, error } = xp_store;
  const { lang } = lang_store;

  useEffect(() => {
    dispatch(getXp);
  }, [dispatch]);

  useEffect(() => {
    console.log('XP', xp);
  }, [xp]);

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
              {/* <motion.div variants={textVariant(1)}> */}
              <p className={`${styles.sectionSubText} text-center`}>
                Parcours Professionnel
              </p>
              <h2 className={`${styles.sectionHeadText} text-center`}>
                Experience acquis
              </h2>
              {/* </motion.div> */}
            </>

            <div className='mt-20 flex flex-col'>
              <VerticalTimeline>
                {xp
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
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              flexWrap: 'wrap',
            }}
          >
            {xp
              .filter(
                (xp: IExperience) =>
                  xp.domaine_fr !== 'Autodidacte' &&
                  xp.domaine_fr !== 'Projet-Professionnel'
              )
              .sort((a: any, b: any) => (a.order > b.order ? -1 : 1))
              .map((xp: IExperience, index: number) => (
                <XpCard xp={xp} key={index} lang={lang} />
              ))}
          </div>
        </>
      )}
    </>
  );
};
