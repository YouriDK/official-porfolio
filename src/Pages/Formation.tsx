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
              marginTop: '25px',
            }}
          >
            <Row
              style={{
                maxWidth: '20%',
                padding: '2%',
                border: '5px double #2ec4b6',
                borderRadius: '40px',
                marginLeft: '30px',
                marginRight: '10px',
                paddingTop: '15px',
                paddingBottom: '15px',
              }}
            >
              <Col className='text' style={{ marginBottom: '15px' }}>
                {lang === 'FR' ? formation.school_fr : formation.school_en}
              </Col>
              {lang === 'FR' ? (
                <Col className='text' style={{ marginBottom: '15px' }}>
                  De {getYear(formation.from)} à {getYear(formation.to)}
                </Col>
              ) : (
                <Col className='text' style={{ marginBottom: '15px' }}>
                  From {getYear(formation.from)} to {getYear(formation.to)}
                </Col>
              )}
              <Col className='text' style={{ marginBottom: '15px' }}>
                {formation.place}
              </Col>
            </Row>
            <Row
              style={{
                maxWidth: '80%',
                textAlign: 'justify',
                padding: '2%',
                border: '5px double #2ec4b6',
                borderRadius: '40px',
                marginRight: '30px',
                paddingTop: '15px',
                paddingBottom: '15px',
              }}
            >
              <Col className='text'>
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
              marginTop: '20px',
              border: '5px double #2ec4b6',
              borderRadius: '40px',
              marginLeft: '30px',
              marginRight: '30px',
              paddingTop: '15px',
              paddingBottom: '15px',
            }}
          >
            {formation.classes_fr && (
              <Row>
                <Col className='title cyan'>
                  {lang === 'FR'
                    ? texte.formation_got.classes.fr
                    : texte.formation_got.classes.en}
                </Col>
                <br />
                {lang === 'FR' ? (
                  <>
                    {formation.classes_fr &&
                      formation.classes_fr.map((classe: string) => (
                        <Col className='text center-text'>{classe}</Col>
                      ))}
                  </>
                ) : (
                  <>
                    {formation.classes_en &&
                      formation.classes_en.map((classe: string) => (
                        <Col className='text center-text'>{classe}</Col>
                      ))}
                  </>
                )}
              </Row>
            )}
            {formation.knowledges_fr && (
              <Row>
                <Col className='title cyan'>
                  {lang === 'FR'
                    ? texte.formation_got.acquis.fr
                    : texte.formation_got.acquis.en}
                </Col>
                <br />
                {lang === 'FR' ? (
                  <>
                    {formation.knowledges_fr &&
                      formation.knowledges_fr.map((classe: string) => (
                        <Col className='text center-text'>{classe}</Col>
                      ))}
                  </>
                ) : (
                  <>
                    {formation.knowledges_en &&
                      formation.knowledges_en.map((classe: string) => (
                        <Col className='text center-text'>{classe}</Col>
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
