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
