import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { ClimbingBoxLoader } from 'react-spinners';
import { Col, Container, Row } from 'reactstrap';
import { getXpWithId } from '../redux/structure/actions';
import { CSS, getYear, texte } from '../tools/utils';

const Project: FC<any> = (): JSX.Element => {
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
        <>{error} </>
      ) : (
        <Container>
          <Row>
            <Col className='title'>
              {lang === 'FR' ? xp_id.name_fr : xp_id.name_en}
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
                {lang === 'FR' ? xp_id.description_fr : xp_id.description_en}
              </Col>
            </Row>
          </Row>

          <Row
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              marginTop: '35px',
            }}
          ></Row>
        </Container>
      )}
    </>
  );
};
export default Project;
