import { combineReducers } from 'redux';

import {
  langReducer,
  authorReducer,
  formationsReducer,
  formationWithIdReducer,
  getSkillsReducer,
  getXpReducer,
  getXpWithIdReducer,
  isMobileReducer,
} from './structure/reducer';

const rootReducer = combineReducers({
  lang: langReducer,
  isMobile: isMobileReducer,
  author: authorReducer,
  formations: formationsReducer,
  formation: formationWithIdReducer,
  skills: getSkillsReducer,
  xp: getXpReducer,
  xp_id: getXpWithIdReducer,
});

export default rootReducer;
