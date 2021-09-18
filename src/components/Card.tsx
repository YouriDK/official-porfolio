import React, { FC } from 'react';
import { experience } from '../Pages/Experiences';

export interface CardProps {
  xp: experience;
  index: number;
  lang: string;
}
export const Card: FC<CardProps> = ({
  xp: experience,
  index: number,
  lang: string,
}: CardProps): JSX.Element => {
  return <div>{}</div>;
};
