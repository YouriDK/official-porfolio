import {
  SET_LANG,
  GET_AUTHOR_REQUEST,
  GET_AUTHOR_SUCCESS,
  GET_AUTHOR_FAILED,
  GET_FORMATIONS_REQUEST,
  GET_FORMATIONS_SUCCESS,
  GET_FORMATIONS_FAILED,
  GET_FORMATION_REQUEST,
  GET_FORMATION_SUCCESS,
  GET_FORMATION_FAILED,
  GET_SKILLS_REQUEST,
  GET_SKILLS_SUCCESS,
  GET_SKILLS_FAILED,
  GET_XP_REQUEST,
  GET_XP_SUCCESS,
  GET_XP_FAILED,
  GET_XP_ID_REQUEST,
  GET_XP_ID_SUCCESS,
  GET_XP_ID_FAILED,
  GET_PROJECTS_FAILED,
  GET_PROJECTS_REQUEST,
  GET_PROJECTS_SUCCESS,
  GET_PROJECT_REQUEST,
  GET_PROJECT_FAILED,
  GET_PROJECT_SUCCESS,
} from './type';

const INITIAL_STATE = {
  lang: 'FR',
  author: {},
  loading: true,
  error: null,
  formations: [],
  formation: null,
  skills: [],
  projects: [],
  xp: [],
  xp_id: null,
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
export const formationWithIdReducer = (
  state: any = INITIAL_STATE,
  action: any
) => {
  switch (action.type) {
    case GET_FORMATION_REQUEST:
      return { ...state, loading: true };
    case GET_FORMATION_SUCCESS:
      return { ...state, loading: false, formation: action.payload };
    case GET_FORMATION_FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
export const getSkillsReducer = (state: any = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case GET_SKILLS_REQUEST:
      return { ...state, loading: true };
    case GET_SKILLS_SUCCESS:
      return { ...state, loading: false, skills: action.payload };
    case GET_SKILLS_FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
export const getProjectsReducer = (state: any = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case GET_PROJECTS_REQUEST:
      return { ...state, loading: true };
    case GET_PROJECTS_SUCCESS:
      return { ...state, loading: false, projects: action.payload };
    case GET_PROJECTS_FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
export const getProjectReducer = (state: any = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case GET_PROJECT_REQUEST:
      return { ...state, loading: true };
    case GET_PROJECT_SUCCESS:
      return { ...state, loading: false, projectId: action.payload };
    case GET_PROJECT_FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getXpReducer = (state: any = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case GET_XP_REQUEST:
      return { ...state, loading: true };
    case GET_XP_SUCCESS:
      return { ...state, loading: false, xp: action.payload };
    case GET_XP_FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
export const getXpWithIdReducer = (state: any = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case GET_XP_ID_REQUEST:
      return { ...state, loading: true };
    case GET_XP_ID_SUCCESS:
      return { ...state, loading: false, xp_id: action.payload };
    case GET_XP_ID_FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
