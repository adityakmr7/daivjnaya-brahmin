import restServices from "../services/restServices";
import {
  GET_ALL_BANNER_LOADING,
  GET_ALL_BANNER_SUCCESS,
  GET_ALL_BANNER_ERROR,
} from "./constants/bannerConstant";

export const getAllBanner = () => (dispatch: any) => {
  dispatch({
    type: GET_ALL_BANNER_LOADING,
  });
  const _rest = new restServices();
  _rest
    .get("/banner")
    .then((res) => {
      dispatch({
        type: GET_ALL_BANNER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ALL_BANNER_ERROR,
        error: err,
      });
    });
};
