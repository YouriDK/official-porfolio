import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Hr } from '../components/projects/ProjectCard.style';
import { SkillTitleH2 } from '../components/skillComponents/SkillComponents.style';
import { getExperienceWithId } from '../redux/structure/actions';
import {
  EnvironnementCard,
  EnvironnementCardHeader,
  EnvironnementCardTitleContent,
  EnvironnementPoints,
  EnvironnementPointsArray,
  ProjectContainer,
  ProjectDescriptionDiv,
  ProjectSectionTitle,
  TaskCard,
} from '../styles/Project.style';
import { blockContentToJsx, formatDate, styles, texte } from '../tools/utils';
import { AppDispatch } from '../redux/store';

export const Experience: FC<any> = (): JSX.Element => {
  const { id }: any = useParams();
  const dispatch: AppDispatch = useDispatch();
  const xp_id_store = useSelector((state: any) => state.xp_id);
  const lang_store = useSelector((state: any) => state.lang);
  const { loading, xp_id } = xp_id_store;
  const { lang } = lang_store;

  useEffect(() => {
    dispatch(getExperienceWithId(id));
  }, [dispatch, id]);
  useEffect(() => {
    console.log('xp_id', xp_id);
  }, [xp_id]);
  return (
    <>
      {!loading && (
        <>
          <ProjectSectionTitle>
            {lang === 'FR' ? xp_id.name_fr : xp_id.name_en}
          </ProjectSectionTitle>
          <SkillTitleH2 className={`${styles.sectionSubText} text-center`}>
            {xp_id.entreprise}
          </SkillTitleH2>
          <ProjectDescriptionDiv>
            De {formatDate(xp_id.from, lang)} à {formatDate(xp_id.to, lang)}
          </ProjectDescriptionDiv>
          <ProjectContainer>
            <EnvironnementCard>
              <EnvironnementCardTitleContent>
                <EnvironnementCardHeader title>
                  {lang === 'FR' ? texte.xp.env.fr : texte.xp.env.en}
                </EnvironnementCardHeader>
                <Hr />
                <EnvironnementPointsArray>
                  {xp_id.environnement &&
                    xp_id.environnement.map((point: any, index: any) => (
                      <EnvironnementPoints key={`experience-point-${index}`}>
                        {point}
                      </EnvironnementPoints>
                    ))}
                </EnvironnementPointsArray>
              </EnvironnementCardTitleContent>
            </EnvironnementCard>
            <TaskCard>
              <EnvironnementCardTitleContent>
                <EnvironnementCardHeader title>
                  {lang === 'FR' ? texte.xp.task.fr : texte.xp.task.en}
                </EnvironnementCardHeader>
                <Hr />
                <EnvironnementPointsArray>
                  {lang === 'FR' &&
                    xp_id.task_fr &&
                    xp_id.task_fr.map((point: any, index: any) => (
                      <EnvironnementPoints key={`experience-point-${index}`}>
                        {point}
                      </EnvironnementPoints>
                    ))}
                  {lang !== 'FR' &&
                    xp_id.task_en &&
                    xp_id.task_en.map((point: any, index: any) => (
                      <EnvironnementPoints key={`experience-point-${index}`}>
                        {point}
                      </EnvironnementPoints>
                    ))}
                </EnvironnementPointsArray>
              </EnvironnementCardTitleContent>
            </TaskCard>
          </ProjectContainer>
          {lang === 'FR' ? (
            <>
              <ProjectDescriptionDiv
                dangerouslySetInnerHTML={{
                  __html: blockContentToJsx(xp_id.description_fr),
                }}
              />
              <ProjectDescriptionDiv>
                {lang === 'FR'
                  ? `Projets : ${xp_id.project_fr}`
                  : `Projects : ${xp_id.project_fr}`}
              </ProjectDescriptionDiv>
            </>
          ) : (
            <ProjectDescriptionDiv
              dangerouslySetInnerHTML={{
                __html: blockContentToJsx(xp_id.description_en),
              }}
            />
          )}
        </>
      )}
    </>
  );
};
