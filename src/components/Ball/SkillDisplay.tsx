import React, { FC } from 'react';
import { urlFor } from '../../tools/utils';
import { SkillCard, SkillLogo, SkillText } from './SkillDisplay.style';

const SkillDisplay: FC<any> = ({ skill }: any): JSX.Element => {
  return (
    skill.logo && (
      <SkillCard>
        <SkillLogo src={urlFor(skill.logo).width(100).height(100).url()} />
        <SkillText> {skill.name}</SkillText>
      </SkillCard>
    )
  );
};
export default SkillDisplay;
