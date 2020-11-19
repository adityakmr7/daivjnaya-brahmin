import {
  POST_ALL_HUB_SUCCESS,
  POST_ALL_HUB_LOADING,
  POST_ALL_HUB_ERROR,
  GET_ALL_STATE_LOADING,
  GET_ALL_STATE_SUCCESS,
} from "./../actions/constants/hubConstant";

const initialState = {
  createLoading: false,
  createError: "",
  createSuccess: "",
  allStates: [],
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
    case GET_ALL_STATE_LOADING:
      return {
        ...state,
      };
    case GET_ALL_STATE_SUCCESS:
      return {
        ...state,
        allStates: action.payload.stringList,
      };

    default:
      return {
        ...state,
      };
  }
};
