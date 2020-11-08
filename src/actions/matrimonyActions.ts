import { createMatrimonyProps } from "../Screens/Matrimony/interface";
import { _matrimony_get_all_profile } from "./../api/endpoints";
import restServices from "../services/restServices";
import {
  GET_ALL_MATRIMONY_BRIDE_SUCCESS,
  GET_ALL_MATRIMONY_ERROR,
  GET_ALL_MATRIMONY_LOADING,
  GET_ALL_MATRIMONY_SUCCESS,
  MATRIMONY_CREATED_ERROR,
  MATRIMONY_CREATED_SUCCESS,
  GET_ALL_MATRIMONY_BRIDE_ERROR,
  GET_MATRIMONY_PROFILE_BY_ID_LOADING,
  GET_MATRIMONY_PROFILE_BY_ID_SUCCESS,
  GET_MATRIMONY_PROFILE_BY_ID_ERROR,
} from "./constants/matrimonyConstants";

/**
 * get all matrimony profile
 */
export const getAllMatrimonyProfile = (gender: string = "MALE") => (
  dispatch: any
) => {
  dispatch({
    type: GET_ALL_MATRIMONY_LOADING,
  });
  const _rest = new restServices();
  _rest
    .get(_matrimony_get_all_profile + `/?gender=${gender}`)
    .then((res) => {
      dispatch({
        type: GET_ALL_MATRIMONY_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ALL_MATRIMONY_ERROR,
        error: err,
      });
    });
};

export const getAllMatrimonyBrideProfile = (gender: string = "FEMALE") => (
  dispatch: any
) => {
  dispatch({
    type: GET_ALL_MATRIMONY_LOADING,
  });

  const _rest = new restServices();
  _rest
    .get(_matrimony_get_all_profile + `/?gender=${gender}`)
    .then((res) => {
      dispatch({
        type: GET_ALL_MATRIMONY_BRIDE_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ALL_MATRIMONY_BRIDE_ERROR,
        error: err,
      });
    });
};

export const createMatrimonyProfile = (data: createMatrimonyProps) => async (
  dispatch: any
) => {
  const _rest = new restServices();
  const image = await _rest.getMediaUrl(data.image);

  const dataToSend = JSON.stringify({
    images: [
      {
        image: image.data.url,
      },
    ],

    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    phoneNumber: data.phoneNumber,
    companyName: data.companyName,
    designation: data.designation,
    education: data.education,
    livesIn: data.livesIn,
    about: data.about,
    interest: data.interest,
    gender: data.gender,
  });
  _rest
    .post("/matrimony/profile", dataToSend)
    .then((res) => {
      dispatch({
        type: MATRIMONY_CREATED_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: MATRIMONY_CREATED_ERROR,
        error: err,
      });
    });
};

export const getMatrimonyProfileById = (pid: number) => async (
  dispatch: any
) => {
  dispatch({
    type: GET_MATRIMONY_PROFILE_BY_ID_LOADING,
  });

  const _rest = new restServices();
  _rest
    .get(`/matrimony/profile/${pid}`)
    .then((res) => {
      dispatch({
        type: GET_MATRIMONY_PROFILE_BY_ID_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_MATRIMONY_PROFILE_BY_ID_ERROR,
        error: err,
      });
    });
};
