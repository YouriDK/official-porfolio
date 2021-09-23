import {
  SET_LANG,
  GET_AUTHOR_REQUEST,
  GET_AUTHOR_SUCCESS,
  GET_AUTHOR_FAILED,
  GET_FORMATIONS_REQUEST,
  GET_FORMATIONS_SUCCESS,
  GET_FORMATIONS_FAILED,
} from './type';

const INITIAL_STATE = {
  lang: 'FR',
  author: {},
  loading: true,
  error: null,
  formations: [],
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
    case GET_AUTHOR_REQUEST:
      return { ...state, loading: true };
    case GET_AUTHOR_SUCCESS:
      return { ...state, loading: false, author: action.payload };
    case GET_AUTHOR_FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
export const formationsReducer = (state: any = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case GET_FORMATIONS_REQUEST:
      return { ...state, loading: true };
    case GET_FORMATIONS_SUCCESS:
      return { ...state, loading: false, formations: action.payload };
    case GET_FORMATIONS_FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
