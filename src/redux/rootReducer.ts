import { combineReducers } from 'redux';

import {
  counterReducer,
  langReducer,
  authorReducer,
} from './structure/reducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  lang: langReducer,
  author: authorReducer,
});

export default rootReducer;
