import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { ClimbingBoxLoader } from 'react-spinners';
import { Col, Container, Row } from 'reactstrap';
import LoadingBox from '../components/LoadingBox';
import { getXpWithId } from '../redux/structure/actions';
import { blockContentToJsx, CSS, texte } from '../tools/utils';

const Project: FC<any> = (): JSX.Element => {
  const { id }: any = useParams();
  const dispatch = useDispatch();
  const xp_id_store = useSelector((state: any) => state.xp_id);
  const lang_store = useSelector((state: any) => state.lang);
  const { loading, xp_id, error } = xp_id_store;
  const { lang } = lang_store;

  useEffect(() => {
    dispatch(getXpWithId(id));
  }, [dispatch, id]);
  return (
    <>
      {loading ? (
        <LoadingBox Icon color='#4c956c' size={150} />
      ) : error ? (
        <>
          <LoadingBox Icon color='#4c956c' size={150} />
          <span>{error}</span>{' '}
        </>
      ) : (
        <Container>
          <Row>
            <Col className='title purple'>
              {lang === 'FR' ? xp_id.name_fr : xp_id.name_en}
            </Col>
          </Row>
          <Row
            style={{
              display: 'flex',
            }}
          >
            <Col xs='6' style={{ display: 'flex', margin: '2%' }}>
              {lang === 'FR' ? (
                <>
                  <div
                    className=' column border'
                    style={{
                      maxWidth: '20%',
                      padding: '10px 2%',
                      marginRight: '10px',
                    }}
                  >
                    <span className='center-text bottom-space'>
                      {xp_id.project_fr}
                    </span>
                    <span className='center-text bottom-space'>
                      {xp_id.domaine_fr}
                    </span>
                    <span className='center-text bottom-space'>
                      {xp_id.link && <a href={xp_id.link}>{xp_id.link}</a>}
                    </span>
                  </div>
                  <div
                    className='border'
                    style={{
                      flex: 1,
                      maxWidth: '80%',
                      textAlign: 'justify',
                      padding: '2%',
                      marginRight: '30px',
                      paddingTop: '15px',
                      paddingBottom: '15px',
                    }}
                    dangerouslySetInnerHTML={{
                      __html: blockContentToJsx(xp_id.description_fr),
                    }}
                  />
                </>
              ) : (
                <>
                  <div
                    className='column border'
                    style={{
                      maxWidth: '20%',
                      padding: '10px 2%',
                      marginRight: '10px',
                    }}
                  >
                    <span className='center-text bottom-space'>
                      <a href={xp_id.entreprise}>{xp_id.project_en}</a>
                    </span>
                    <span className='center-text bottom-space'>
                      {xp_id.domaine_en}
                    </span>
                    <span className='center-text bottom-space'>
                      {xp_id.link && <a href={xp_id.link}>{xp_id.link}</a>}
                    </span>
                  </div>
                  <div
                    className='border'
                    style={{
                      flex: 1,
                      maxWidth: '80%',
                      textAlign: 'justify',
                      padding: '2%',
                      marginRight: '30px',
                      paddingTop: '15px',
                      paddingBottom: '15px',
                    }}
                    dangerouslySetInnerHTML={{
                      __html: blockContentToJsx(xp_id.description_en),
                    }}
                  />
                </>
              )}
            </Col>
          </Row>
          <Row
            className='border center-text'
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              margin: '10px 30px',
              paddingTop: '15px',
              paddingBottom: '15px',
            }}
          >
            <Col className='column'>
              <h2>{lang === 'FR' ? texte.xp.env.fr : texte.xp.env.en}</h2>

              {xp_id.environnement &&
                xp_id.environnement.map((en: string) => (
                  <span style={{ marginTop: '1px' }}>{en}</span>
                ))}
            </Col>
            {xp_id.task_fr && (
              <Col className='column'>
                <h2> {lang === 'FR' ? texte.xp.task.fr : texte.xp.task.en}</h2>

                {lang === 'FR'
                  ? xp_id.task_fr.map((task: string) => <span>{task}</span>)
                  : xp_id.task_en.map((task: string) => <span>{task}</span>)}
              </Col>
            )}
          </Row>
        </Container>
      )}
    </>
  );
};
export default Project;
