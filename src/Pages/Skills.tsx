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
  const lang_store = useSelector((state: any) => state.lang);
  const { loading, skills, error } = skills_store;
  const { lang } = lang_store;
  useEffect(() => {
    dispatch(getSkills);
  }, []);
  return (
    <>
      {loading ? (
        <ClimbingBoxLoader color='#2ec4b6' loading css={CSS} size={30} />
      ) : error ? (
        <>{error} </>
      ) : (
        <Container>
          {skills.map((skill: any, index: number) => (
            <CircleProgress skill={skill} key={index} />
          ))}
        </Container>
      )}
    </>
  );
};

export default Skills;
