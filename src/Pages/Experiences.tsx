import { FC, useEffect, useState } from 'react';
import sanityClient from '../client';

export interface experience {
  title: string;
  from: Date;
  to: Date;
  entreprise: string;
  sujet: string;
  job: string;
  taches: string;
  tasks: string;
}
export const Experiences: FC<any> = (props: any): JSX.Element => {
  const [Experiences, setExperiences] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "experience"]{
          title,
          from,
          to,
          entreprise,
          sujet,
          job,
          subject,
          task,
          taches }`
      )
      .then((data: any) => setExperiences(data))
      .catch(console.error);
  }, [props.value]);
  return (
    <>
      {' '}
      {Experiences &&
        Experiences.sort((a: any, b: any) => (a.index > b.index ? -1 : 1)).map(
          (xp: experience) => <div>{xp.title}</div>
        )}
    </>
  );
};
