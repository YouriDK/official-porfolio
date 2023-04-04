import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import { ImageWork } from '../../styles/Home.style';
import { urlFor } from '../../tools/utils';
import {
  EntrepriseImageContainer,
  EntrepriseIntels,
  EntreprisePoints,
  EntreprisePointsArray,
  IntelsDiv,
} from './ExperienceCard.style';

const ExperienceCard: FC<any> = ({ experience }: any): JSX.Element => {
  const lang_store = useSelector((state: any) => state.lang);
  const { lang } = lang_store;
  const history = useHistory();
  const formatDate = (date: string) => {
    const splitDate = date.split('-');
    return `${splitDate[1]}/${splitDate[0]}`;
  };

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#1d1836',
        color: '#fff',
        cursor: 'pointer',
      }}
      onTimelineElementClick={() =>
        history.push(`/experiences/${experience._id}`)
      }
      contentArrowStyle={{ borderRight: '7px solid  #232631' }}
      date={`${formatDate(experience.from)} - ${formatDate(experience.to)}`}
      iconStyle={{ background: '#000000' }}
      icon={
        <EntrepriseImageContainer>
          <ImageWork
            src={urlFor(experience.image).width(60).height(60).url()}
            alt={experience.entreprise}
            className='w-[60%] h-[60%] object-contain '
          />
        </EntrepriseImageContainer>
      }
    >
      <div>
        {lang === 'FR' ? (
          <IntelsDiv>{experience.name_fr}</IntelsDiv>
        ) : (
          <IntelsDiv>{experience.name_en}</IntelsDiv>
        )}
        <EntrepriseIntels style={{ margin: 0, fontSize: '16px' }}>
          {experience.entreprise}
        </EntrepriseIntels>
      </div>
      {lang === 'FR' ? (
        <EntreprisePointsArray>
          {experience.task_fr &&
            experience.task_fr.map((point: any, index: any) => (
              <EntreprisePoints key={`experience-point-${index}`}>
                {point}
              </EntreprisePoints>
            ))}
        </EntreprisePointsArray>
      ) : (
        <EntreprisePointsArray>
          {experience.task_en &&
            experience.task_en.map((point: any, index: any) => (
              <EntreprisePoints key={`experience-point-${index}`}>
                {point}
              </EntreprisePoints>
            ))}
        </EntreprisePointsArray>
      )}
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
