import {
  USER_DATA_LOADING,
  USER_DATA_SUCCESS,
  USER_DATA_ERROR,
} from "./constants/userConstants";
import restServices from "../services/restServices";
import { _user_get_user } from "../api/endpoints";
export const getUserDetail = () => (dispatch: any) => {
  dispatch({
    type: USER_DATA_LOADING,
  });
  const _rest = new restServices();
  _rest
    .get(_user_get_user)
    .then((res) => {
      dispatch({
        type: USER_DATA_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: USER_DATA_ERROR,
        error: err,
      });
    });
};
