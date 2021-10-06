import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { ClimbingBoxLoader } from 'react-spinners';
import { Col, Container, Row } from 'reactstrap';
import { getXpWithId } from '../redux/structure/actions';
import {
  blockContentToJsx,
  CSS,
  getMonth,
  getYear,
  texte,
} from '../tools/utils';

export const Experience: FC<any> = (): JSX.Element => {
  const { id }: any = useParams();
  const dispatch = useDispatch();
  const xp_id_store = useSelector((state: any) => state.xp_id);
  const lang_store = useSelector((state: any) => state.lang);
  const { loading, xp_id, error } = xp_id_store;
  const { lang } = lang_store;

  useEffect(() => {
    dispatch(getXpWithId(id));
  }, []);

  return (
    <>
      {loading ? (
        <ClimbingBoxLoader color='#2ec4b6' loading css={CSS} size={30} />
      ) : error ? (
        <>
          <ClimbingBoxLoader color='#ff0054' loading css={CSS} size={30} />
          <span>{error}</span>{' '}
        </>
      ) : (
        <Container>
          <Row>
            <Col className='title'>
              <h1>{lang === 'FR' ? xp_id.name_fr : xp_id.name_en}</h1>
            </Col>
          </Row>
          <Row
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              marginTop: '20px',
            }}
          >
            <Col xs='6' style={{ display: 'flex', margin: '2%' }}>
              {lang === 'FR' ? (
                <>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span className='center-text bottom-space'>
                      {xp_id.entreprise}
                    </span>
                    <span className='center-text bottom-space'>
                      {xp_id.domaine_fr}
                    </span>
                    <span className='center-text bottom-space'>
                      {xp_id.project_fr}
                    </span>
                    <span className='center-text bottom-space'>
                      De {getMonth(xp_id.from, true, lang)}{' '}
                      {getYear(xp_id.from)} à {getMonth(xp_id.to, true, lang)}{' '}
                      {getYear(xp_id.to)}
                    </span>
                  </div>
                  <div
                    style={{ flex: 1, marginLeft: '20px' }}
                    dangerouslySetInnerHTML={{
                      __html: blockContentToJsx(xp_id.description_fr),
                    }}
                  />
                </>
              ) : (
                <>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span className='center-text bottom-space'>
                      {xp_id.entreprise}
                    </span>
                    <span className='center-text bottom-space'>
                      {xp_id.domaine_en}
                    </span>
                    <span className='center-text bottom-space'>
                      {xp_id.project_en}
                    </span>
                    <span className='center-text bottom-space'>
                      From {getMonth(xp_id.from, true, lang)}{' '}
                      {getYear(xp_id.from)} to {getMonth(xp_id.to, true, lang)}{' '}
                      {getYear(xp_id.to)}
                    </span>
                  </div>
                  <div
                    style={{ flex: 1, marginLeft: '20px' }}
                    dangerouslySetInnerHTML={{
                      __html: blockContentToJsx(xp_id.description_en),
                    }}
                  />
                </>
              )}
            </Col>
          </Row>
          <Row
            style={{
              display: 'flex',
              textAlign: 'center',
              justifyContent: 'space-around',
            }}
          >
            <Col style={{ display: 'flex', flexDirection: 'column' }}>
              <h2>{lang === 'FR' ? texte.xp.env.fr : texte.xp.env.en}</h2>

              {xp_id.environnement &&
                xp_id.environnement.map((en: string) => (
                  <span style={{ marginTop: '5px' }}>{en}</span>
                ))}
            </Col>
            <Col style={{ display: 'flex', flexDirection: 'column' }}>
              <h2> {lang === 'FR' ? texte.xp.task.fr : texte.xp.task.en}</h2>

              {xp_id.task_fr && lang === 'FR'
                ? xp_id.task_fr.map((task: string) => (
                    <span style={{ marginTop: '5px' }}>{task}</span>
                  ))
                : xp_id.task_en.map((task: string) => (
                    <span style={{ marginTop: '5px' }}>{task}</span>
                  ))}
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};
