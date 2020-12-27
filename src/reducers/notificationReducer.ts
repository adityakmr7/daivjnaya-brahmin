import {
  GET_ALL_NOTIFICATION_ERROR,
  GET_ALL_NOTIFICATION_LOADING,
  GET_ALL_NOTIFICATION_SUCCESS,
} from "../actions/constants/notificationConstant";

const initialState = {
  getAllNotificationLoading: false,
  getAllNotificationData: "",
  getAllNotificationError: "",
};
export default (state = initialState, action: any) => {
  switch (action.type) {
    case GET_ALL_NOTIFICATION_LOADING:
      return {
        ...state,
        getAllNotificationLoading: true,
        getAllNotificationData: "",
        getAllNotificationError: "",
      };
    case GET_ALL_NOTIFICATION_SUCCESS:
      return {
        ...state,
        getAllNotificationLoading: false,
        getAllNotificationData: action.payload,
        getAllNotificationError: "",
      };
    case GET_ALL_NOTIFICATION_ERROR:
      return {
        ...state,
        getAllNotificationLoading: false,
        getAllNotificationData: "",
        getAllNotificationError: action.error,
      };

    default:
      return {
        ...state,
      };
  }
};
