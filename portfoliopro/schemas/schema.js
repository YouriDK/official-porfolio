// We import object and document schemas
import blockContent from './blockContent';
import author from './author';
import experience from './experience';
import formation from './formation';
import projects from './projects';
import skill from './skills';

// Then we give our schema to the builder and provide the result to Sanity
// eslint-disable-next-line import/no-anonymous-default-export
export default [
  // The following are document types which will appear
  // in the studio.
  author,
  projects,
  formation,
  experience,
  skill,
  // When added to this list, object types can be used as
  // { type: 'typename' } in other document schemas
  blockContent,
];
