import {
  INCREMENT,
  DECREMENT,

  // GET_LANG,
  SET_LANG,
  GET_DATA_AUTHOR_REQUEST,
  GET_DATA_AUTHOR_SUCCESS,
  GET_DATA_AUTHOR_FAILED,
} from './type';
import sanityClient from '../../client';

export const increaseCounter = () => {
  return {
    type: INCREMENT,
  };
};

export const decreaseCounter = () => {
  return {
    type: DECREMENT,
  };
};

export const getAuthor = async (dispatch: any) => {
  try {
    dispatch({ type: GET_DATA_AUTHOR_REQUEST });
    const data = await sanityClient.fetch(
      `*[_type == "author"]{
          name,
          first_name,
          last_name,
          email,
          slug,
          bio_fr,
          bio_en,
           }`
    );

    dispatch({ type: GET_DATA_AUTHOR_SUCCESS, payload: data[0] });
  } catch (error: any) {
    dispatch({ type: GET_DATA_AUTHOR_FAILED, payload: error.message });
  }
};

// export const getLang = () => {
//   return {
//     type: GET_LANG,
//   };
// };
export const setLang = (lang: string) => {
  return {
    type: SET_LANG,
    payload: lang,
  };
};
