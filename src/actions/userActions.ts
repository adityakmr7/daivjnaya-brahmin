import { _user_update_user } from "./../api/endpoints";
import {
  USER_DATA_LOADING,
  USER_DATA_SUCCESS,
  USER_DATA_ERROR,
  USER_EDIT_PROFILE_SUCCESS,
  USER_EDIT_PROFILE_ERROR,
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

export const editProfile = (data: {}) => (dispatch: any) => {
  console.log("editData", data);
  const _rest = new restServices();
  _rest
    .put(
      `${_user_update_user}?firstName=${data.firstName}&lastName=${data.lastName}&phoneNumber=${data.phoneNumber}&location=${data.location}&studyAt=${data.studyAt}&workAt=${data.workAt}&work=${data.work}&bio=${data.bio}`
    )
    .then((res) => {
      dispatch({
        type: USER_EDIT_PROFILE_SUCCESS,
        payload: res.status,
      });
    })
    .catch((err) => {
      dispatch({
        type: USER_EDIT_PROFILE_ERROR,
        error: err,
      });
    });
};
