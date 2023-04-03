import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'reactstrap';
import LoadingBox from '../components/LoadingBox';
import SkillDisplay from '../components/SkillComponents/SkillComponents';
import {
  SkillContrainer,
  SkillTitleH2,
  SkillTitleP,
} from '../components/SkillComponents/SkillComponents.style';
import { getSkills } from '../redux/structure/actions';
import { ISkill } from '../Types/Interfaces';
import { styles, texte } from '../tools/utils';

const Skills: FC<any> = (): JSX.Element => {
  const dispatch = useDispatch();
  const lang_store = useSelector((state: any) => state.lang);
  const skills_store = useSelector((state: any) => state.skills);
  const { loading, skills, error } = skills_store;
  const { lang } = lang_store;
  useEffect(() => {
    dispatch(getSkills);
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <LoadingBox Icon color='#4c956c' size={50} />
      ) : error ? (
        <>{error} </>
      ) : (
        <Container
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <>
            <SkillTitleP className={`${styles.sectionSubText} text-center`}>
              {lang === 'FR' ? texte.skills.title.fr : texte.skills.title.en}
            </SkillTitleP>
            <SkillTitleH2 className={`${styles.sectionHeadText} text-center`}>
              {lang === 'FR' ? texte.skills.main.fr : texte.skills.main.en}
            </SkillTitleH2>
          </>
          <SkillContrainer>
            {skills
              .filter((element: ISkill) => element.domaine === 'main')
              .map((skill: ISkill, index: number) => (
                <SkillDisplay skill={skill} key={index} />
              ))}
          </SkillContrainer>
          <>
            <SkillTitleH2
              className={`${styles.sectionHeadText} text-center`}
              style={{ marginTop: '25px' }}
            >
              {lang === 'FR' ? texte.skills.solide.fr : texte.skills.solide.en}
            </SkillTitleH2>
          </>
          <SkillContrainer>
            {skills
              .filter((element: ISkill) => element.domaine === 'solid')
              .map((skill: ISkill, index: number) => (
                <SkillDisplay skill={skill} key={index} />
              ))}
          </SkillContrainer>
          <>
            <SkillTitleH2
              className={`${styles.sectionHeadText} text-center`}
              style={{ marginTop: '25px' }}
            >
              {lang === 'FR'
                ? texte.skills.knowlegde.fr
                : texte.skills.knowlegde.en}
            </SkillTitleH2>
          </>
          <SkillContrainer>
            {skills
              .filter((element: ISkill) => element.domaine === 'base')
              .map((skill: ISkill, index: number) => (
                <SkillDisplay skill={skill} key={index} />
              ))}
          </SkillContrainer>
        </Container>
      )}
    </>
  );
};

export default Skills;
