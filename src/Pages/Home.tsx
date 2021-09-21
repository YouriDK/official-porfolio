import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthor } from '../redux/structure/actions';

export const Home: FC<any> = (): JSX.Element => {
  const author_store = useSelector((state: any) => state.author);
  const lang_store = useSelector((state: any) => state.lang);
  const { author, loading, error } = author_store;
  const { lang } = lang_store;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAuthor);
    console.log(' dd', author_store);
    console.log('  author, lang, loading', author, lang, loading);
  }, [lang]);
  return (
    <>
      {console.log(lang)}
      {loading ? (
        <> Chargement </>
      ) : error ? (
        <>{error} </>
      ) : (
        <>
          {lang === 'FR' ? (
            <> Acceuil de {author.name} </>
          ) : (
            <> Home of {author.name} </>
          )}
        </>
      )}
    </>
  );
};
