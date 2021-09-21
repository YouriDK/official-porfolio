import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';
const composeEnhancer = compose;
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
