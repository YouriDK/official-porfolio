import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row } from 'reactstrap';
import CircleProgress from '../components/CircleProgress';
import LoadingBox from '../components/LoadingBox';
import { getSkills } from '../redux/structure/actions';
import { ISkill } from '../tools/model';
import SkillDisplay from '../components/Ball/SkillDisplay';
import { styles, texte } from '../tools/utils';
import {
  SkillContrainer,
  SkillTitleH2,
  SkillTitleP,
} from '../components/Ball/SkillDisplay.style';

const Skills: FC<any> = (): JSX.Element => {
  const dispatch = useDispatch();
  const lang_store = useSelector((state: any) => state.lang);
  const skills_store = useSelector((state: any) => state.skills);
  const { loading, skills, error } = skills_store;
  const isMobile = useSelector((state: any) => state.isMobile.isMobile);
  const { lang } = lang_store;
  useEffect(() => {
    dispatch(getSkills);
  }, [dispatch]);

  const skill_type = [
    { value: 'software', title: 'Soft Ware' },
    { value: 'langage_it', title: 'Langage IT' },
    { value: 'tech', title: 'Technologie' },
    { value: 'others', title: 'Others' },
  ];

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

          {/* {skill_type.map((type: any) => (
            <Row
              style={{
                display: 'flex',
                margin: 'auto',
                textAlign: 'center',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: isMobile ? 'space-around' : '',
                  flexWrap: isMobile ? 'wrap' : 'nowrap',
                  // margin: isMobile ? 'auto' : '',
                }}
              >
                {skills
                  .filter((element: ISkill) => element.type === type.value)
                  .map((skill: ISkill, index: number) => (
                    <SkillDisplay skill={skill} key={index} />
                  ))}
              </div>
            </Row>
          ))} */}
        </Container>
      )}
    </>
  );
};

export default Skills;
