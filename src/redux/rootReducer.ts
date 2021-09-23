import { combineReducers } from 'redux';

import {
  langReducer,
  authorReducer,
  formationsReducer,
  formationWithIdReducer,
} from './structure/reducer';

const rootReducer = combineReducers({
  lang: langReducer,
  author: authorReducer,
  formations: formationsReducer,
  formation: formationWithIdReducer,
});

export default rootReducer;
