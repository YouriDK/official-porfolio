import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { SkillTitleH2 } from '../components/Ball/SkillDisplay.style';
import LoadingBox from '../components/LoadingBox';
import { Hr } from '../components/Projects/ProjectCard.style';
import { getProjectswithId } from '../redux/structure/actions';
import { blockContentToJsx, styles, texte } from '../tools/utils';
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
} from './Project.style';

const Project: FC<any> = (): JSX.Element => {
  const { id }: any = useParams();
  const isMobile = useSelector((state: any) => state.isMobile.isMobile);
  const dispatch = useDispatch();
  const projectIdStore = useSelector((state: any) => state.projectId);
  const lang_store = useSelector((state: any) => state.lang);
  const { loading, projectId, error } = projectIdStore;
  const { lang } = lang_store;

  useEffect(() => {
    dispatch(getProjectswithId(id));
  }, [dispatch, id]);

  useEffect(() => {
    console.log('projectId', projectId, id);
  }, [projectId, id]);
  return (
    <>
      {loading ? (
        <LoadingBox Icon color='#4c956c' size={150} />
      ) : error ? (
        <>
          <LoadingBox Icon color='#4c956c' size={150} />
          <span>{error}</span>{' '}
        </>
      ) : (
        <>
          <ProjectSectionTitle>
            {lang === 'FR' ? projectId.name_fr : projectId.name_en}
          </ProjectSectionTitle>
          <SkillTitleH2 className={`${styles.sectionSubText} text-center`}>
            {lang === 'FR' ? projectId.domaine_fr : projectId.domaine_en}
          </SkillTitleH2>

          <ProjectContainer>
            <EnvironnementCard>
              <EnvironnementCardTitleContent>
                <EnvironnementCardHeader title>
                  {lang === 'FR' ? texte.xp.env.fr : texte.xp.env.en}
                </EnvironnementCardHeader>
                <Hr />
                <EnvironnementPointsArray>
                  {projectId.environnement &&
                    projectId.environnement.map((point: any, index: any) => (
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
                    projectId.task_fr &&
                    projectId.task_fr.map((point: any, index: any) => (
                      <EnvironnementPoints key={`experience-point-${index}`}>
                        {point}
                      </EnvironnementPoints>
                    ))}
                  {lang !== 'FR' &&
                    projectId.task_en &&
                    projectId.task_en.map((point: any, index: any) => (
                      <EnvironnementPoints key={`experience-point-${index}`}>
                        {point}
                      </EnvironnementPoints>
                    ))}
                </EnvironnementPointsArray>
              </EnvironnementCardTitleContent>
            </TaskCard>
          </ProjectContainer>
          {lang === 'FR' ? (
            <ProjectDescriptionDiv
              dangerouslySetInnerHTML={{
                __html: blockContentToJsx(projectId.description_fr),
              }}
            />
          ) : (
            <ProjectDescriptionDiv
              dangerouslySetInnerHTML={{
                __html: blockContentToJsx(projectId.description_en),
              }}
            />
          )}
        </>
      )}
    </>
  );
};
export default Project;
