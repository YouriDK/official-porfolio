import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import LoadingBox from '../components/LoadingBox';
import XpCard from '../components/XpCard';

import { getProjects, getXp } from '../redux/structure/actions';
import { IExperience } from '../tools/model';
import { styles, texte } from '../tools/utils';
import { SkillTitleH2 } from '../components/Ball/SkillDisplay.style';
import ProjectCard from '../components/Projects/ProjectCard';
import { GridContainer } from '../components/Projects/ProjectCard.style';

const Projects: FC<any> = (): JSX.Element => {
  const dispatch = useDispatch();
  const project_store = useSelector((state: any) => state.projects);
  const lang_store = useSelector((state: any) => state.lang);
  const { loading, projects, error } = project_store;
  const { lang } = lang_store;

  useEffect(() => {
    dispatch(getProjects);
  }, [dispatch]);
  useEffect(() => {
    console.log('projects', projects);
  }, [projects]);

  return (
    <>
      {loading ? (
        <LoadingBox Icon color='#4c956c' size={150} />
      ) : error ? (
        <>{error} </>
      ) : (
        <>
          <SkillTitleH2 className={`${styles.sectionSubText} text-center`}>
            {lang === 'FR' ? texte.projects.title.fr : texte.projects.title.en}
          </SkillTitleH2>
          <GridContainer>
            {projects.map((project: any, index: number) => (
              <ProjectCard project={project} key={index} />
            ))}
          </GridContainer>
        </>
      )}
    </>
  );
};
export default Projects;
