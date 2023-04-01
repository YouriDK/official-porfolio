import { useEffect, useRef, useState } from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents.style';
import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselItem,
  CarouselContainer,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
} from './Timeline.style';
import { useSelector } from 'react-redux';
// const TimeLineData = [
//   { year: 2017, text: 'Started my journey' },
//   { year: 2018, text: 'Worked as a freelance developer' },
//   { year: 2019, text: 'Founded JavaScript Mastery' },
//   { year: 2020, text: 'Shared my projects with the world' },
//   { year: 2021, text: 'Started my own platform' },
// ];

const Timeline = ({ TimeLineData }: any) => {
  const TOTAL_CAROUSEL_COUNT = TimeLineData.length;
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();
  const lang_store = useSelector((state: any) => state.lang);
  const { lang } = lang_store;
  const scroll = (node: any, left: any) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  };

  const handleClick = (e: any, i: any) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(
        (carouselRef.current as any).scrollWidth *
          0.7 *
          (i / TimeLineData.length)
      );

      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(
        ((carouselRef.current as any).scrollLeft /
          ((carouselRef.current as any).scrollWidth * 0.7)) *
          TimeLineData.length
      );

      setActiveItem(index);
    }
  };

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Section id='about'>
      <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        <>
          {TimeLineData.map((item: any, index: number) => (
            <CarouselMobileScrollNode
              key={index}
              final={index === TOTAL_CAROUSEL_COUNT - 1}
            >
              <CarouselItem
                index={index}
                id={`carousel__item-${index}`}
                active={activeItem}
                onClick={(e) => handleClick(e, index)}
              >
                <CarouselItemTitle>
                  {`${item.to.split('-')[0]}`}
                  <CarouselItemImg
                    width='208'
                    height='6'
                    viewBox='0 0 208 6'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z'
                      fill='url(#paint0_linear)'
                      fillOpacity='0.33'
                    />
                    <defs>
                      <linearGradient
                        id='paint0_linear'
                        x1='-4.30412e-10'
                        y1='0.5'
                        x2='208'
                        y2='0.500295'
                        gradientUnits='userSpaceOnUse'
                      >
                        <stop stopColor='white' />
                        <stop
                          offset='0.79478'
                          stopColor='white'
                          stopOpacity='0'
                        />
                      </linearGradient>
                    </defs>
                  </CarouselItemImg>
                </CarouselItemTitle>

                <CarouselItemText>
                  {lang === 'FR' ? item.title_fr : item.title_en}
                </CarouselItemText>
                <CarouselItemText>
                  {lang === 'FR' ? item.specialite : item.major}
                </CarouselItemText>
              </CarouselItem>
            </CarouselMobileScrollNode>
          ))}
        </>
      </CarouselContainer>
      <CarouselButtons>
        {TimeLineData.map((item: any, index: any) => {
          return (
            <CarouselButton
              key={index}
              index={index}
              active={activeItem}
              onClick={(e) => handleClick(e, index)}
              type='button'
            >
              <CarouselButtonDot active={activeItem} />
            </CarouselButton>
          );
        })}
      </CarouselButtons>
    </Section>
  );
};

export default Timeline;
