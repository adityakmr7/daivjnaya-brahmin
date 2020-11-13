import {
  POST_ALL_HUB_SUCCESS,
  POST_ALL_HUB_LOADING,
  POST_ALL_HUB_ERROR,
} from "./../actions/constants/hubConstant";

const initialState = {
  createLoading: false,
  createError: "",
  createSuccess: "",
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case POST_ALL_HUB_LOADING:
      return {
        ...state,
        createLoading: true,
        createError: "",
        createSuccess: "",
      };
    case POST_ALL_HUB_SUCCESS:
      return {
        ...state,
        createLoading: false,
        createError: "",
        createSuccess: action.payload.status,
      };
    case POST_ALL_HUB_ERROR:
      return {
        ...state,
        createLoading: true,
        createError: action.error,
        createSuccess: "",
      };

    default:
      return {
        ...state,
      };
  }
};
