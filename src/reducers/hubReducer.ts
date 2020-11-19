import {
  POST_ALL_HUB_SUCCESS,
  POST_ALL_HUB_LOADING,
  POST_ALL_HUB_ERROR,
  GET_ALL_STATE_LOADING,
  GET_ALL_STATE_SUCCESS,
  GET_ALL_HUB_POST_FILTER_LOADING,
  GET_ALL_HUB_POST_FILTER_SUCCESS,
} from "./../actions/constants/hubConstant";

const initialState = {
  createLoading: false,
  createError: "",
  createSuccess: "",
  allStates: [],
  filterByStateData: [],
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
    case GET_ALL_HUB_POST_FILTER_LOADING:
      return {
        ...state,
      };
    case GET_ALL_HUB_POST_FILTER_SUCCESS:
      return {
        ...state,
        filterByStateData: action.payload._embedded.hubResourceList,
      };
    default:
      return {
        ...state,
      };
  }
};
