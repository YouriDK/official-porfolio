import { combineReducers } from 'redux';

import {
  langReducer,
  authorReducer,
  formationsReducer,
  formationWithIdReducer,
  getSkillsReducer,
  getXpReducer,
} from './structure/reducer';

const rootReducer = combineReducers({
  lang: langReducer,
  author: authorReducer,
  formations: formationsReducer,
  formation: formationWithIdReducer,
  skills: getSkillsReducer,
  xp: getXpReducer,
});

export default rootReducer;
