import { FC } from 'react';
import { Row } from 'reactstrap';
import '../scss/CircleProgress.scss';
import { ISkill } from '../Types/Interfaces';

interface CircleProgressProps {
  skill: ISkill;
}

const CircleProgress: FC<CircleProgressProps> = ({ skill }): JSX.Element => {
  return (
    <>
      <Row>
        <div className={`progress ${skill.level}`}>
          <span className='progress-left'>
            <span className='progress-bar'></span>
          </span>
          <span className='progress-right'>
            <span className='progress-bar'></span>
          </span>
          <div className='progress-value'>{skill.name}</div>
        </div>
      </Row>
    </>
  );
};
export default CircleProgress;
