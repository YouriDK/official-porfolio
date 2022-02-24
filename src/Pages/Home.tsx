import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthor } from '../redux/structure/actions';
// import { CoolCard, CoolCardText } from 'react-cool-cards';
import { texte, urlFor } from '../tools/utils';
import DISPLAYTEXT from '../components/Display_text';
import LoadingBox from '../components/LoadingBox';
import HomeCard from '../components/HomeCard';

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

  useEffect(() => {
    dispatch(getAuthor);
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <LoadingBox Icon color='#4c956c' size={150} />
      ) : error ? (
        <>{error} </>
      ) : (
        <>
          <>
            <HomeCard
              title={author.name}
              description={lang === 'FR' ? texte.modo.fr : texte.modo.en}
              pic={urlFor(author.authorImage).width(400).url()}
            />
            <p
              style={{ padding: '2%', color: 'white' }}
              className='text center-text'
            >
              {lang === 'FR' ? author.bio_fr : author.bio_en}
            </p>
          </>
        </>
      )}
    </>
  );
};
