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
} from './type';
import sanityClient from '../../client';

export const getAuthor = async (dispatch: any) => {
  try {
    dispatch({ type: GET_AUTHOR_REQUEST });
    const data = await sanityClient.fetch(
      `*[_type == "author"]{
          name,
          first_name,
          last_name,
          email,
          slug,
          bio_fr,
          bio_en,
          "authorImage":image.asset->url
      }`
    );

    dispatch({ type: GET_AUTHOR_SUCCESS, payload: data[0] });
  } catch (error: any) {
    dispatch({ type: GET_AUTHOR_FAILED, payload: error.message });
  }
};
export const getFormations = async (dispatch: any) => {
  try {
    dispatch({ type: GET_FORMATIONS_REQUEST });
    const data = await sanityClient.fetch(
      `*[_type == "formation"]{
        _id,
        title_fr,
        title_en,
        specialite,
        major,
        school_fr,
        school_en,
        place,
        to,
        order,
        from,
        description_fr,
        description_en,
        classes_fr,
        classes_en,
        knowledges_fr,
        knowledges_en,
      }`
    );
    dispatch({ type: GET_FORMATIONS_SUCCESS, payload: data });
  } catch (error: any) {
    dispatch({ type: GET_FORMATIONS_FAILED, payload: error.message });
  }
};
export const getFormationsWithId =
  (formation_id: string) => async (dispatch: any) => {
    try {
      dispatch({ type: GET_FORMATION_REQUEST });
      const data = await sanityClient.fetch(
        `*[_type == "formation" && _id == "${formation_id}"]{
        _id,
        title_fr,
        title_en,
        specialite,
        major,
        school_fr,
        school_en,
        place,
        to,
        order,
        from,
        description_fr,
        description_en,
        classes_fr,
        classes_en,
        knowledges_fr,
        knowledges_en,
      }`
      );
      console.log('data', data);
      dispatch({ type: GET_FORMATION_SUCCESS, payload: data[0] });
    } catch (error: any) {
      dispatch({ type: GET_FORMATION_FAILED, payload: error.message });
    }
  };

export const setLang = (lang: string) => {
  return {
    type: SET_LANG,
    payload: lang,
  };
};
