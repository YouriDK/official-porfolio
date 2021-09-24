import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getFormationsWithId } from '../redux/structure/actions';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
import { CSS, getYear, texte } from '../tools/utils';
import '../scss/Formation.scss';
import { Container, Row, Col } from 'reactstrap';

export const Formation: FC<any> = (): JSX.Element => {
  const { id }: any = useParams();
  const dispatch = useDispatch();
  const formation_store = useSelector((state: any) => state.formation);
  const lang_store = useSelector((state: any) => state.lang);
  const { loading, formation, error } = formation_store;
  const { lang } = lang_store;

  useEffect(() => {
    dispatch(getFormationsWithId(id));
  }, []);
  return (
    <>
      {loading ? (
        <ClimbingBoxLoader color='#2ec4b6' loading css={CSS} size={30} />
      ) : error ? (
        <>{error} </>
      ) : (
        <Container>
          <Row>
            <Col className='title'>
              {lang === 'FR' ? formation.title_fr : formation.title_en}
            </Col>
            <Col className='title'>
              {lang === 'FR' ? formation.specialite : formation.major}
            </Col>
          </Row>
          <Row
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              marginTop: '45px',
            }}
          >
            <Row>
              <Col xs='6'>
                {lang === 'FR' ? formation.school_fr : formation.school_en}
              </Col>
              {lang === 'FR' ? (
                <Col xs='6'>
                  De {getYear(formation.from)} à {getYear(formation.to)}
                </Col>
              ) : (
                <Col>
                  From {getYear(formation.from)} to {getYear(formation.to)}
                </Col>
              )}
              <Col xs='6'>{formation.place}</Col>
            </Row>
            <Row>
              <Col xs='6'>
                {lang === 'FR'
                  ? formation.description_fr
                  : formation.description_en}
              </Col>
            </Row>
          </Row>

          <Row
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              marginTop: '35px',
            }}
          >
            <Row>
              <Col xs='6' className='title cyan'>
                {lang === 'FR'
                  ? texte.formation_got.classes.fr
                  : texte.formation_got.classes.en}
              </Col>
              <br />
              {lang === 'FR' ? (
                <>
                  {formation.classes_fr &&
                    formation.classes_fr.map((classe: string) => (
                      <Col>{classe}</Col>
                    ))}
                </>
              ) : (
                <>
                  {formation.classes_en &&
                    formation.classes_en.map((classe: string) => (
                      <Col>{classe}</Col>
                    ))}
                </>
              )}
            </Row>
            <Row>
              <Col xs='6' className='title cyan'>
                {lang === 'FR'
                  ? texte.formation_got.acquis.fr
                  : texte.formation_got.acquis.en}
              </Col>
              <br />
              {lang === 'FR' ? (
                <>
                  {formation.classes_fr &&
                    formation.classes_fr.map((classe: string) => (
                      <Col>{classe}</Col>
                    ))}
                </>
              ) : (
                <>
                  {formation.classes_en &&
                    formation.classes_en.map((classe: string) => (
                      <Col>{classe}</Col>
                    ))}
                </>
              )}
            </Row>
          </Row>
        </Container>
      )}
    </>
  );
};
