import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthor } from '../redux/structure/actions';
import { CoolCard, CoolCardText, CoolCardLink } from 'react-cool-card';
import { urlFor } from '../tools/utils';

export const Home: FC<any> = (): JSX.Element => {
  const author_store = useSelector((state: any) => state.author);
  const lang_store = useSelector((state: any) => state.lang);
  const { author, loading, error } = author_store;
  const { lang } = lang_store;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAuthor);
    console.log(' Author', author_store);
    console.log(' Author Full', author);
  }, [lang]);
  return (
    <>
      {loading ? (
        <> Chargement </>
      ) : error ? (
        <>{error} </>
      ) : (
        <>
          {lang === 'FR' ? (
            <>
              <CoolCard
                style={{ margin: 'auto' }}
                className='cool-card'
                width='30%'
                height='30%'
              >
                <div>
                  {' '}
                  <img
                    style={{
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      textAlign: 'center',
                      verticalAlign: 'middle',
                      minWidth: '100%',
                      minHeight: '100%',
                    }}
                    src={urlFor(author.authorImage).width(400).url()}
                  />
                </div>

                <CoolCardText
                  title={author.name}
                  description="Le code, c'est comme l'humour.Si il faut l'expliquer c'est que c'est mauvais."
                />
                <p>Hello</p>
              </CoolCard>
            </>
          ) : (
            <>
              {' '}
              <img src='https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg' />{' '}
            </>
          )}
        </>
      )}
    </>
  );
};
