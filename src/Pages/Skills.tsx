import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ClimbingBoxLoader } from 'react-spinners';
import { Col, Container, Row } from 'reactstrap';
import CircleProgress from '../components/CircleProgress';
import { getSkills } from '../redux/structure/actions';
import { skill } from '../tools/model';
import { CSS, texte } from '../tools/utils';

const Skills: FC<any> = (): JSX.Element => {
  const dispatch = useDispatch();
  const skills_store = useSelector((state: any) => state.skills);
  const { loading, skills, error } = skills_store;

  useEffect(() => {
    dispatch(getSkills);
  }, []);

  const skill_type = [
    { value: 'software', title: 'Soft Ware' },
    { value: 'langage_it', title: 'Langage IT' },
    { value: 'tech', title: 'Technologie' },
    { value: 'others', title: 'Others' },
  ];

  return (
    <>
      {loading ? (
        <ClimbingBoxLoader color='#2ec4b6' loading css={CSS} size={30} />
      ) : error ? (
        <>{error} </>
      ) : (
        <Container
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {skill_type.map((type: any) => (
            <Row
              style={{
                display: 'flex',
                margin: 'auto',
                textAlign: 'center',
                flexDirection: 'column',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                {skills
                  .filter((element: skill) => element.type === type.value)
                  .map((skill: skill, index: number) => (
                    <CircleProgress skill={skill} key={index} />
                  ))}
              </div>
            </Row>
          ))}
        </Container>
      )}
    </>
  );
};

export default Skills;
