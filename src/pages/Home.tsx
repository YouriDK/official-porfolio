import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BackgroundAnimation } from '../components/BgAnimation';
import { getAuthor } from '../redux/structure/actions';
import {
  LeftSection,
  Section,
  SectionText,
  SectionTitle,
} from '../styles/GlobalComponents.style';
import {
  Image,
  SectionSettings,
  SectionSettings2,
  SectionTitleSettings,
} from '../styles/Home.style';
import { texte, urlFor } from '../tools/utils';
import { AppDispatch } from '../redux/store';
import { useClient } from 'sanity';

export const Home: FC<any> = (): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();

  const author_store = useSelector((state: any) => state.author);
  const lang_store = useSelector((state: any) => state.lang);
  const { loading, author } = author_store;
  const { lang } = lang_store;

  useEffect(() => {
    dispatch(getAuthor);
    console.log('author_store', author_store);
  }, [dispatch]);

  // useEffect(() => {
  //   console.log('LOL');
  //   const data = client.fetch(
  //     `*[_type == "author"]{
  //     name,
  //     first_name,
  //     last_name,
  //     email,
  //     slug,
  //     bio_fr,
  //     bio_en,
  //     "authorImage":image.asset->url
  // }`
  //   );
  //   console.log('DATA', data);
  // }, []);

  return (
    <>
      {!loading && (
        <Section {...SectionSettings}>
          <Section {...SectionSettings2}>
            <LeftSection>
              <SectionTitle {...SectionTitleSettings}>
                {author.name}
              </SectionTitle>
              <Image
                src={urlFor(author.authorImage).width(400).height(400).url()}
                alt='owner'
                className='card-home card-home-image'
              />
              <SectionText>
                {lang === 'FR' ? author.bio_fr : author.bio_en}{' '}
                {lang === 'FR' ? texte.modo.fr : texte.modo.en}
              </SectionText>
            </LeftSection>
          </Section>
          <BackgroundAnimation />
        </Section>
      )}
    </>
  );
};
