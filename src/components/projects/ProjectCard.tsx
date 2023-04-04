import { FC, useEffect } from 'react';
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
} from './ProjectCard.style';
import { texte } from '../../tools/utils';
import { useSelector } from 'react-redux';

const ProjectCard: FC<any> = ({ project }: any): JSX.Element => {
  const lang_store = useSelector((state: any) => state.lang);
  const { lang } = lang_store;

  return (
    <BlogCard>
      <TitleContent>
        <HeaderThree title>
          {lang === 'FR' ? project.name_fr : project.name_en}
        </HeaderThree>
        <Hr />
        <TitleContent>
          {project.entreprise
            ? project.entreprise
            : lang === 'FR'
            ? project.domaine_fr
            : project.domaine_en}
        </TitleContent>
        <Hr />
      </TitleContent>
      <CardInfo className='card-info'>
        {lang === 'FR' ? project.intro_fr : project.intro_en}
      </CardInfo>
      <div>
        <TitleContent>Stack</TitleContent>
        <TagList>
          {project.environnement.map((stack: any, i: number) => {
            return <Tag key={i}>{stack}</Tag>;
          })}
        </TagList>
      </div>
      <UtilityList>
        <ExternalLinks href={`/projects/${project._id}`}>
          {lang === 'FR' ? texte.details_bouton.fr : texte.details_bouton.en}
        </ExternalLinks>
        {project.link && (
          <ExternalLinks href={project.link}>
            {lang === 'FR' ? texte.check.fr : texte.check.en}
          </ExternalLinks>
        )}
      </UtilityList>
    </BlogCard>
  );
};
export default ProjectCard;
