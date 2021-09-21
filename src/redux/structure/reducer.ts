import {
  INCREMENT,
  DECREMENT,
  SET_LANG,
  GET_DATA_AUTHOR_REQUEST,
  GET_DATA_AUTHOR_SUCCESS,
  GET_DATA_AUTHOR_FAILED,
} from './type';

const INITIAL_STATE = {
  count: 0,
  lang: 'FR',
  author: {},
  loading: true,
  error: null,
};

export const counterReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
  }
};

export const langReducer = (state: any = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case SET_LANG:
      return {
        ...state,
        lang: action.payload,
      };

    default:
      return state;
  }
};

export const authorReducer = (state: any = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case GET_DATA_AUTHOR_REQUEST:
      return { ...state, loading: true };
    case GET_DATA_AUTHOR_SUCCESS:
      return { ...state, loading: false, author: action.payload };
    case GET_DATA_AUTHOR_FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
