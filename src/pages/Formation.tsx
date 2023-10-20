import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Hr } from '../components/projects/ProjectCard.style';
import { SkillTitleH2 } from '../components/skillComponents/SkillComponents.style';
import { getFormationWithId } from '../redux/structure/actions';
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
import { formatDate, styles, texte } from '../tools/utils';
import { AppDispatch } from '../redux/store';

export const Formation: FC<any> = (): JSX.Element => {
  const { id }: any = useParams();
  const dispatch: AppDispatch = useDispatch();
  const formation_store = useSelector((state: any) => state.formation);
  const lang_store = useSelector((state: any) => state.lang);
  const { loading, formation } = formation_store;
  const { lang } = lang_store;

  useEffect(() => {
    dispatch(getFormationWithId(id));
  }, [dispatch, id]);

  useEffect(() => {
    console.log('formation', formation);
  }, [formation]);
  return (
    <>
      {!loading && (
        <>
          <ProjectSectionTitle>
            {lang === 'FR' ? formation.title_fr : formation.title_en}
          </ProjectSectionTitle>
          <SkillTitleH2 className={`${styles.sectionSubText} text-center`}>
            {lang === 'FR' ? formation.specialite : formation.major}
          </SkillTitleH2>
          <SkillTitleH2>
            {`${formation.place} - ${
              lang === 'FR' ? formation.school_fr : formation.school_en
            }`}
          </SkillTitleH2>
          <ProjectDescriptionDiv>
            {lang === 'FR'
              ? ` De ${formatDate(formation.from, lang)} à ${formatDate(
                  formation.to,
                  lang
                )}`
              : `From ${formatDate(formation.from, lang)} to ${formatDate(
                  formation.to,
                  lang
                )}`}
          </ProjectDescriptionDiv>

          <ProjectDescriptionDiv>
            {lang === 'FR'
              ? formation.description_fr
              : formation.description_en}
          </ProjectDescriptionDiv>
          <ProjectContainer>
            <EnvironnementCard>
              <EnvironnementCardTitleContent>
                <EnvironnementCardHeader title>
                  {lang === 'FR'
                    ? texte.formation_got.classes.fr
                    : texte.formation_got.classes.en}
                </EnvironnementCardHeader>
                <Hr />
                <EnvironnementPointsArray>
                  {lang === 'FR' &&
                    formation.classes_fr &&
                    formation.classes_fr.map((point: any, index: any) => (
                      <EnvironnementPoints key={`formation-classes-${index}`}>
                        {point}
                      </EnvironnementPoints>
                    ))}
                  {lang !== 'FR' &&
                    formation.classes_en &&
                    formation.classes_en.map((point: any, index: any) => (
                      <EnvironnementPoints key={`formation-classes-${index}`}>
                        {point}
                      </EnvironnementPoints>
                    ))}
                </EnvironnementPointsArray>
              </EnvironnementCardTitleContent>
            </EnvironnementCard>
            <TaskCard>
              <EnvironnementCardTitleContent>
                <EnvironnementCardHeader title>
                  {lang === 'FR'
                    ? texte.formation_got.acquis.fr
                    : texte.formation_got.acquis.en}
                </EnvironnementCardHeader>
                <Hr />
                <EnvironnementPointsArray>
                  {lang === 'FR' &&
                    formation.knowledges_fr &&
                    formation.knowledges_fr.map((point: any, index: any) => (
                      <EnvironnementPoints key={`experience-point-${index}`}>
                        {point}
                      </EnvironnementPoints>
                    ))}
                  {lang !== 'FR' &&
                    formation.knowledges_en &&
                    formation.knowledges_en.map((point: any, index: any) => (
                      <EnvironnementPoints key={`experience-point-${index}`}>
                        {point}
                      </EnvironnementPoints>
                    ))}
                </EnvironnementPointsArray>
              </EnvironnementCardTitleContent>
            </TaskCard>
          </ProjectContainer>
        </>
      )}
    </>
  );
};
