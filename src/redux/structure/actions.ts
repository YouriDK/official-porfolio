/* eslint-disable react-hooks/rules-of-hooks */
import sanityClient from '../../client';
import {
  GET_AUTHOR_FAILED,
  GET_AUTHOR_REQUEST,
  GET_AUTHOR_SUCCESS,
  GET_FORMATIONS_FAILED,
  GET_FORMATIONS_REQUEST,
  GET_FORMATIONS_SUCCESS,
  GET_FORMATION_FAILED,
  GET_FORMATION_REQUEST,
  GET_FORMATION_SUCCESS,
  GET_PROJECTS_FAILED,
  GET_PROJECTS_REQUEST,
  GET_PROJECTS_SUCCESS,
  GET_PROJECT_FAILED,
  GET_PROJECT_REQUEST,
  GET_PROJECT_SUCCESS,
  GET_SKILLS_FAILED,
  GET_SKILLS_REQUEST,
  GET_SKILLS_SUCCESS,
  GET_XP_FAILED,
  GET_XP_ID_FAILED,
  GET_XP_ID_REQUEST,
  GET_XP_ID_SUCCESS,
  GET_XP_REQUEST,
  GET_XP_SUCCESS,
  SET_LANG,
} from './type';
export const getAuthor = async (dispatch: any) => {
  console.log('TRYYY');
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
    console.log(sanityClient);
    console.log(data);
    dispatch({ type: GET_AUTHOR_SUCCESS, payload: data[0] });
  } catch (error: any) {
    console.log('FAILED', error);
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
export const getFormationWithId =
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

      dispatch({ type: GET_FORMATION_SUCCESS, payload: data[0] });
    } catch (error: any) {
      dispatch({ type: GET_FORMATION_FAILED, payload: error.message });
    }
  };

export const getProjectwithId =
  (projectId: string) => async (dispatch: any) => {
    try {
      dispatch({ type: GET_PROJECT_REQUEST });
      const data = await sanityClient.fetch(
        `*[_type == "projects" && _id == "${projectId}"]{
          _id,
          order,
          name_fr,
          name_en,
          intro_en,
          intro_fr,
          date,
          domaine_fr,
          entreprise,
          domaine_en,
          link,
          description_fr,
          description_en,
          task_fr,
          task_en,
          environnement,
          "image":image.asset->url
        }`
      );

      dispatch({ type: GET_PROJECT_SUCCESS, payload: data[0] });
    } catch (error: any) {
      dispatch({ type: GET_PROJECT_FAILED, payload: error.message });
    }
  };
export const getProjects = async (dispatch: any) => {
  try {
    dispatch({ type: GET_PROJECTS_REQUEST });
    const data = await sanityClient.fetch(
      `*[_type == "projects"]{
          _id,
          order,
          name_fr,
          name_en,
          intro_en,
          intro_fr,
          date,
          domaine_fr,
          domaine_en,
          link,
          description_fr,
          description_en,
          task_fr,
          task_en,
          entreprise,
          environnement,
          "image":image.asset->url
        }`
    );

    dispatch({ type: GET_PROJECTS_SUCCESS, payload: data });
  } catch (error: any) {
    dispatch({ type: GET_PROJECTS_FAILED, payload: error.message });
  }
};
export const getSkills = async (dispatch: any) => {
  try {
    dispatch({ type: GET_SKILLS_REQUEST });
    const data = await sanityClient.fetch(
      `*[_type == "skills"]{
          _id,
          name,
          type,
          domaine,
          level,
          "logo":logo.asset->url,
        }`
    );

    dispatch({ type: GET_SKILLS_SUCCESS, payload: data });
  } catch (error: any) {
    dispatch({ type: GET_SKILLS_FAILED, payload: error.message });
  }
};

export const getExperiences = async (dispatch: any) => {
  try {
    dispatch({ type: GET_XP_REQUEST });
    const data = await sanityClient.fetch(
      `*[_type == "experience"]{
        _id,
        order,
        name_fr,
        name_en,
        entreprise,
        to,
        from,
        domaine_fr,
        domaine_en,
        project_fr,
        project_en,
        description_fr,
        description_en,
        task_fr,
        task_en,
        link,
        environnement,
        "image":image.asset->url ,
      }`
    );
    dispatch({ type: GET_XP_SUCCESS, payload: data });
  } catch (error: any) {
    dispatch({ type: GET_XP_FAILED, payload: error.message });
  }
};

export const getExperienceWithId =
  (formation_id: string) => async (dispatch: any) => {
    try {
      dispatch({ type: GET_XP_ID_REQUEST });
      const data = await sanityClient.fetch(
        `*[_type == "experience" && _id == "${formation_id}"]{
        _id,
        order,
        name_fr,
        name_en,
        entreprise,
        to,
        from,
        domaine_fr,
        domaine_en,
        project_fr,
        project_en,
        description_fr,
        description_en,
        task_fr,
        task_en,
        link,
        environnement,
       
      }`
      );
      dispatch({ type: GET_XP_ID_SUCCESS, payload: data[0] });
    } catch (error: any) {
      dispatch({ type: GET_XP_ID_FAILED, payload: error.message });
    }
  };

export const setLang = (lang: string) => {
  return {
    type: SET_LANG,
    payload: lang,
  };
};
