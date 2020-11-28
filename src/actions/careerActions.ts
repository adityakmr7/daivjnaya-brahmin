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

export const postTalents = () => (dispatch: any) => {
  dispatch({
    type: POST_TALENT_LOADING,
  });
  const _rest = new restServices();
  _rest
    .post("/career/talent", {})
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
