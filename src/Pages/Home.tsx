import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthor } from '../redux/structure/actions';
import { CoolCard, CoolCardText } from 'react-cool-card';
import { texte, urlFor } from '../tools/utils';
import DISPLAYTEXT from '../components/Display_text';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';

export const Home: FC<any> = (): JSX.Element => {
  const dispatch = useDispatch();
  const author_store = useSelector((state: any) => state.author);
  const lang_store = useSelector((state: any) => state.lang);
  const { author, loading, error } = author_store;
  const { lang } = lang_store;
  const styleImage: any = {
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    verticalAlign: 'middle',
    minWidth: '100%',
    minHeight: '100%',
  };
  const CSS = `margin : auto`;

  useEffect(() => {
    dispatch(getAuthor);
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <ClimbingBoxLoader color='#2ec4b6' loading css={CSS} size={30} />
      ) : error ? (
        <>{error} </>
      ) : (
        <>
          <>
            <CoolCard
              style={{ margin: 'auto' }}
              className='cool-card'
              width='30%'
              height='30%'
            >
              <div>
                <img
                  alt=''
                  style={styleImage}
                  src={urlFor(author.authorImage).url()}
                />
              </div>

              <CoolCardText
                title={<DISPLAYTEXT text={author.name} title />}
                description={lang === 'FR' ? texte.modo.fr : texte.modo.en}
              />
            </CoolCard>

            <p style={{ padding: '2%' }} className='text center-text'>
              {lang === 'FR' ? author.bio_fr : author.bio_en}
            </p>
          </>
        </>
      )}
    </>
  );
};
