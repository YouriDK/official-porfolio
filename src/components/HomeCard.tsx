import React, { FC } from 'react';
import DISPLAYTEXT from './Display_text';
import '../scss/HomeCard.scss';
import { useSelector } from 'react-redux';

interface HomeCardProps {
  title: string;
  pic: any;
  description: string;
}
const HomeCard: FC<HomeCardProps> = ({
  pic,
  title,
  description,
}): JSX.Element => {
  const isMobile = useSelector((state: any) => state.isMobile.isMobile);
  return (
    <div className='card-home'>
      <DISPLAYTEXT text={title} title />
      <img
        src={pic}
        alt='owner'
        className='card-home-image'
        width={isMobile ? '300px' : ''}
      />
      <h3 className='home-card-description'>{description}</h3>
    </div>
  );
};
export default HomeCard;
