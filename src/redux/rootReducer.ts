import { combineReducers } from 'redux';

import {
  langReducer,
  authorReducer,
  formationsReducer,
} from './structure/reducer';

const rootReducer = combineReducers({
  lang: langReducer,
  author: authorReducer,
  formations: formationsReducer,
});

export default rootReducer;
