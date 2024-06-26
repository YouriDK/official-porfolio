import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BackgroundAnimation } from '../components/BgAnimation';
import { AppDispatch } from '../redux/store';
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

export const Home: FC<any> = (): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();

  const author_store = useSelector((state: any) => state.author);
  const lang_store = useSelector((state: any) => state.lang);
  const { loading, author } = author_store;
  const { lang } = lang_store;
  const [smallScreen, setSmallScreen] = useState(window.innerWidth < 938);

  useEffect(() => {
    window.addEventListener('resize', () =>
      setSmallScreen(window.innerWidth < 938)
    );
    return () => {
      window.removeEventListener('resize', () =>
        setSmallScreen(window.innerWidth < 938)
      );
    };
  }, []);
  useEffect(() => {
    dispatch(getAuthor);
  }, [dispatch]);

  return (
    <>
      {!loading && (
        <Section {...SectionSettings}>
          <Section {...SectionSettings2}>
            <LeftSection>
              <SectionTitle
                {...SectionTitleSettings}
                style={{
                  width: smallScreen ? '100%' : 'max-content',
                  textAlign: smallScreen ? 'center' : 'unset',
                }}
              >
                {author.name}
              </SectionTitle>
              <Image
                src={urlFor(author.authorImage).width(400).height(400).url()}
                alt='owner'
                className='card-home card-home-image'
                style={{ padding: smallScreen ? '20px' : '5px' }}
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
