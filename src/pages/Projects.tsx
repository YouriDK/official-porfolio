import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProjectCard from '../components/projects/ProjectCard';
import { GridContainer } from '../components/projects/ProjectCard.style';
import { SkillTitleH2 } from '../components/skillComponents/SkillComponents.style';
import { getProjects } from '../redux/structure/actions';
import { styles, texte } from '../tools/utils';
import { AppDispatch } from '../redux/store';

const Projects: FC<any> = (): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();
  const project_store = useSelector((state: any) => state.projects);
  const lang_store = useSelector((state: any) => state.lang);
  const { projects } = project_store;
  const { lang } = lang_store;

  useEffect(() => {
    dispatch(getProjects);
  }, [dispatch]);

  return (
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
  );
};
export default Projects;
