import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getFormationsWithId } from '../redux/structure/actions';
import { getYear, texte } from '../tools/utils';
import '../scss/Formation.scss';
import { Container, Row, Col } from 'reactstrap';
import LoadingBox from '../components/LoadingBox';

export const Formation: FC<any> = (): JSX.Element => {
  const { id }: any = useParams();
  const dispatch = useDispatch();
  const formation_store = useSelector((state: any) => state.formation);
  const lang_store = useSelector((state: any) => state.lang);
  const { loading, formation, error } = formation_store;
  const { lang } = lang_store;

  useEffect(() => {
    dispatch(getFormationsWithId(id));
  }, [dispatch, id]);
  return (
    <>
      {loading ? (
        <LoadingBox Icon color='#4c956c' size={150} />
      ) : error ? (
        <>{error} </>
      ) : (
        <Container>
          <Row>
            <Col className='title blue'>
              {lang === 'FR' ? formation.title_fr : formation.title_en}
            </Col>
            <Col className='title blue'>
              {lang === 'FR' ? formation.specialite : formation.major}
            </Col>
          </Row>
          <Row
            style={{
              display: 'flex',
              marginTop: '25px',
            }}
          >
            <Row
              className='border center-text secondary'
              style={{
                maxWidth: '20%',
                padding: '2%',

                marginLeft: '30px',
                marginRight: '10px',
                paddingTop: '15px',
                paddingBottom: '15px',
              }}
            >
              <Col className='text' style={{ marginBottom: '15px' }}>
                <span>
                  {lang === 'FR' ? formation.school_fr : formation.school_en}
                </span>
              </Col>
              {lang === 'FR' ? (
                <Col className='text' style={{ marginBottom: '15px' }}>
                  <span>
                    {' '}
                    De {getYear(formation.from)} à {getYear(formation.to)}
                  </span>
                </Col>
              ) : (
                <Col className='text' style={{ marginBottom: '15px' }}>
                  <span>
                    {' '}
                    From {getYear(formation.from)} to {getYear(formation.to)}
                  </span>
                </Col>
              )}
              <Col className='text' style={{ marginBottom: '15px' }}>
                <span>{formation.place}</span>
              </Col>
            </Row>
            <Row
              className='border secondary'
              style={{
                maxWidth: '80%',
                textAlign: 'justify',
                padding: '2%',
                marginRight: '30px',
                paddingTop: '15px',
                paddingBottom: '15px',
              }}
            >
              <Col className='text'>
                <span>
                  {lang === 'FR'
                    ? formation.description_fr
                    : formation.description_en}
                </span>
              </Col>
            </Row>
          </Row>

          <Row
            className='border secondary'
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              marginTop: '20px',
              marginLeft: '30px',
              marginRight: '30px',
              paddingTop: '15px',
              paddingBottom: '15px',
            }}
          >
            {formation.classes_fr && (
              <Row style={{ textAlign: 'center' }}>
                <Col className='title blue'>
                  {lang === 'FR'
                    ? texte.formation_got.classes.fr
                    : texte.formation_got.classes.en}
                </Col>
                <br />
                {lang === 'FR' ? (
                  <Col className='column'>
                    {formation.classes_fr &&
                      formation.classes_fr.map((classe: string) => (
                        <span>{classe}</span>
                      ))}
                  </Col>
                ) : (
                  <Col className='column'>
                    {formation.classes_en &&
                      formation.classes_en.map((classe: string) => (
                        <span>{classe}</span>
                      ))}
                  </Col>
                )}
              </Row>
            )}
            {formation.knowledges_fr && (
              <Row className='center-text column'>
                <Col className='title blue'>
                  {lang === 'FR'
                    ? texte.formation_got.acquis.fr
                    : texte.formation_got.acquis.en}
                </Col>
                <br />
                {lang === 'FR' ? (
                  <>
                    {formation.knowledges_fr &&
                      formation.knowledges_fr.map((classe: string) => (
                        <span>{classe}</span>
                      ))}
                  </>
                ) : (
                  <>
                    {formation.knowledges_en &&
                      formation.knowledges_en.map((classe: string) => (
                        <span>{classe}</span>
                      ))}
                  </>
                )}
              </Row>
            )}
          </Row>
        </Container>
      )}
    </>
  );
};
