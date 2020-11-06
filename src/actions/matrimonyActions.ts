import { createMatrimonyProps } from "../Screens/Matrimony/interface";
import { _matrimony_get_all_profile } from "./../api/endpoints";
import restServices from "../services/restServices";
import {
  GET_ALL_MATRIMONY_ERROR,
  GET_ALL_MATRIMONY_LOADING,
  GET_ALL_MATRIMONY_SUCCESS,
} from "./constants/matrimonyConstants";

/**
 * get all matrimony profile
 */
export const getAllMatrimonyProfile = (gender: string) => (dispatch: any) => {
  dispatch({
    type: GET_ALL_MATRIMONY_LOADING,
  });

  const _rest = new restServices();
  _rest
    .get(_matrimony_get_all_profile + `/?gender=${gender}`)
    .then((res) => {
      console.log("matrimony", res);
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

export const createMatrimonyProfile = (data: createMatrimonyProps) => async (
  dispatch: any
) => {
  const _rest = new restServices();
  const image = await _rest.getMediaUrl(data.image);

  const dataToSend = {
    imageUrl: image,
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
  };

  _rest
    .post("/matrimony/profile", dataToSend)
    .then((res) => {
      console.log("matrimoy", res);
    })
    .catch((err) => {
      console.log("matrimonyErr", err);
    });
};
