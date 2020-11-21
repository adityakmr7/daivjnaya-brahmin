import {
  POST_ALL_HUB_SUCCESS,
  POST_ALL_HUB_LOADING,
  POST_ALL_HUB_ERROR,
  GET_ALL_STATE_LOADING,
  GET_ALL_STATE_SUCCESS,
  GET_ALL_HUB_POST_FILTER_LOADING,
  GET_ALL_HUB_POST_FILTER_SUCCESS,
  GET_ALL_HUB_BY_ID_LOADING,
  GET_ALL_HUB_BY_ID_SUCCESS,
  GET_ALL_HUB_BY_ID_ERROR,
} from "./../actions/constants/hubConstant";

const initialState = {
  createLoading: false,
  createError: "",
  createSuccess: "",
  allStates: [],
  stateDataLoading: false,
  filterByStateData: [],
  hubMemberDetail: "",
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
        stateDataLoading: true,
      };
    case GET_ALL_HUB_POST_FILTER_SUCCESS:
      return {
        ...state,
        stateDataLoading: false,
        filterByStateData: action.payload._embedded.hubResourceList,
      };
    case GET_ALL_HUB_BY_ID_LOADING:
      return {
        ...state,
        // by id loading state
      };
    case GET_ALL_HUB_BY_ID_SUCCESS:
      return {
        ...state,
        hubMemberDetail: action.payload,
      };
    case GET_ALL_HUB_BY_ID_ERROR:
      return {
        ...state,
        // add loading state
      };
    default:
      return {
        ...state,
      };
  }
};
