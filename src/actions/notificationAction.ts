import restServices from "../services/restServices";
import {
  GET_ALL_NOTIFICATION_ERROR,
  GET_ALL_NOTIFICATION_LOADING,
  GET_ALL_NOTIFICATION_SUCCESS,
} from "./constants/notificationConstant";

export const getAllNotification = () => (dispatch: any) => {
  dispatch({
    type: GET_ALL_NOTIFICATION_LOADING,
  });
  const _rest = new restServices();
  _rest
    .get("/notification")
    .then((res) => {
      dispatch({
        type: GET_ALL_NOTIFICATION_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ALL_NOTIFICATION_ERROR,
        error: "Something Went Wrong" || err,
      });
    });
};
