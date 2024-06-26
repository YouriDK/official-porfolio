import { combineReducers } from 'redux';

import {
  langReducer,
  authorReducer,
  formationsReducer,
  formationWithIdReducer,
  getSkillsReducer,
  getXpReducer,
  getXpWithIdReducer,
  getProjectsReducer,
  getProjectReducer,
} from './structure/reducer';

const rootReducer = combineReducers({
  lang: langReducer,
  author: authorReducer,
  formations: formationsReducer,
  formation: formationWithIdReducer,
  skills: getSkillsReducer,
  xp: getXpReducer,
  xp_id: getXpWithIdReducer,
  projects: getProjectsReducer,
  projectId: getProjectReducer,
});

export default rootReducer;
