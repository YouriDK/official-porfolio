import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthor } from '../redux/structure/actions';
import { texte, urlFor } from '../tools/utils';
import { BackgroundAnimation } from '../components/BgAnimation';
import LoadingBox from '../components/LoadingBox';
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

export const Home: FC<any> = (): JSX.Element => {
  const dispatch = useDispatch();
  const isMobile = useSelector((state: any) => state.isMobile.isMobile);
  const author_store = useSelector((state: any) => state.author);
  const lang_store = useSelector((state: any) => state.lang);
  const { author, loading, error } = author_store;
  const { lang } = lang_store;

  useEffect(() => {
    dispatch(getAuthor);
  }, [dispatch, isMobile]);

  return (
    <>
      {loading ? (
        <LoadingBox Icon color='#4c956c' size={150} />
      ) : error ? (
        <>{error} </>
      ) : (
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
