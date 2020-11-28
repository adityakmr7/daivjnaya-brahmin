import { actionSheetDefaultProps } from "react-native-propel-kit";
import restServices from "../services/restServices";
import {
  CREATE_CAREER_LOADING,
  CREATE_CAREER_SUCCESS,
  CREATE_CAREER_ERROR,
  POST_CV_LOADING,
  POST_CV_SUCCESS,
  POST_CV_ERROR,
  POST_TALENT_LOADING,
  POST_TALENT_SUCCESS,
  POST_TALENT_ERROR,
  GET_CAREER_CV_LOADING,
  GET_CAREER_CV_SUCCESS,
  GET_CAREER_CV_ERROR,
  GET_JOB_LOADING,
  GET_JOB_SUCCESS,
  GET_JOB_ERROR,
  GET_JOB_POSTING_LOADING,
  GET_JOB_POSTING_SUCCESS,
  GET_JOB_POSTING_ERROR,
  GET_CAREER_TALENT_LOADING,
  GET_CAREER_TALENT_SUCCESS,
  GET_CAREER_TALENT_ERROR,
} from "./constants/careerConstant";

export const createNewCareer = (data: any) => (dispatch: any) => {
  dispatch({
    type: CREATE_CAREER_LOADING,
  });

  const _rest = new restServices();
  _rest
    .post("/career/jobPosting", {})
    .then((res) => {
      dispatch({
        type: CREATE_CAREER_SUCCESS,
        payload: res,
      });
    })
    .catch((err) => {
      dispatch({
        type: CREATE_CAREER_ERROR,
        error: err,
      });
    });
};

/**
 * Find Job
 * @param data
 */
export const postNewCV = (data: any) => (dispatch: any) => {
  dispatch({
    type: POST_CV_LOADING,
  });
  const _rest = new restServices();
  _rest
    .post("/career/cv", data)
    .then((res) => {
      dispatch({
        type: POST_CV_SUCCESS,
        payload: res.data.url,
      });
    })
    .catch((err) => {
      dispatch({
        type: POST_CV_ERROR,
        error: err,
      });
    });
};

export const postTalents = (data: any) => (dispatch: any) => {
  dispatch({
    type: POST_TALENT_LOADING,
  });
  const _rest = new restServices();
  _rest
    .post("/career/talent", data)
    .then((res) => {
      dispatch({
        type: POST_TALENT_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: POST_TALENT_ERROR,
        payload: err,
      });
    });
};

/**
 * @get
 * career/cv
 */

export const getCareerCv = () => (dispatch: any) => {
  dispatch({
    type: GET_CAREER_CV_LOADING,
  });
  const _rest = new restServices();
  _rest
    .get("/career/cv")
    .then((res) => {
      dispatch({
        type: GET_CAREER_CV_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_CAREER_CV_ERROR,
        error: err,
      });
    });
};

/**
 * @get
 * career/job
 */

export const getJob = () => (dispatch: any) => {
  dispatch({
    type: GET_JOB_LOADING,
  });

  const _rest = new restServices();

  _rest
    .get("/career/job")
    .then((res) => {
      dispatch({
        type: GET_JOB_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_JOB_ERROR,
        error: err,
      });
    });
};

/**
 * @get
 * /career/jobPosting
 */

export const getJobPosting = () => (dispatch: any) => {
  dispatch({
    type: GET_JOB_POSTING_LOADING,
  });
  const _rest = new restServices();
  _rest
    .get("/career/jobPosting")
    .then((res) => {
      dispatch({
        type: GET_JOB_POSTING_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_JOB_POSTING_ERROR,
        error: err,
      });
    });
};

/**
 * @GET
 * /career/talent
 */

export const getCareerTalent = () => (dispatch: any) => {
  dispatch({
    type: GET_CAREER_TALENT_LOADING,
  });
  const _rest = new restServices();
  _rest
    .get("/career/talent")
    .then((res) => {
      dispatch({
        type: GET_CAREER_TALENT_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_CAREER_TALENT_ERROR,
        error: err,
      });
    });
};
