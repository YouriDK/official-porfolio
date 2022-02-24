import React, { FC } from 'react';
import DISPLAYTEXT from './Display_text';
import '../scss/HomeCard.scss';

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
  return (
    <div className='card-home'>
      <DISPLAYTEXT text={title} title />
      <img src={pic} alt='owner' className='card-home-image' />
      <h3 className='home-card-description'>{description}</h3>
    </div>
  );
};
export default HomeCard;
