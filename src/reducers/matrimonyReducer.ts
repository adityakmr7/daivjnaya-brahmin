import {
  GET_ALL_MATRIMONY_BRIDE_SUCCESS,
  GET_ALL_MATRIMONY_ERROR,
  GET_ALL_MATRIMONY_LOADING,
  GET_ALL_MATRIMONY_SUCCESS,
  GET_MATRIMONY_PROFILE_BY_ID_ERROR,
  GET_MATRIMONY_PROFILE_BY_ID_LOADING,
  GET_MATRIMONY_PROFILE_BY_ID_SUCCESS,
  MATRIMONY_CREATED_ERROR,
  MATRIMONY_CREATED_SUCCESS,
} from "./../actions/constants/matrimonyConstants";

const initialState = {
  loading: false,
  matrimonyProfileList: [],
  matrimonyBrideProfileList: [],
  matrimonyDetailProfile: [],
  detailLoading: false,
  error: "",
  created: false,
};

const matrimonyReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_ALL_MATRIMONY_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_MATRIMONY_SUCCESS:
      return {
        ...state,
        loading: false,
        matrimonyProfileList: action.payload,
      };
    case GET_ALL_MATRIMONY_BRIDE_SUCCESS:
      return {
        ...state,
        loading: false,
        matrimonyBrideProfileList: action.payload,
      };
    case GET_ALL_MATRIMONY_ERROR:
      return {
        ...state,
        loading: true,
        error: "Network Error",
      };
    case MATRIMONY_CREATED_SUCCESS:
      return {
        ...state,
        created: true,
        successMessage: action.payload,
      };
    case GET_MATRIMONY_PROFILE_BY_ID_LOADING:
      return {
        ...state,
        detailLoading: true,
      };
    case GET_MATRIMONY_PROFILE_BY_ID_SUCCESS:
      return {
        ...state,
        matrimonyDetailProfile: action.payload,
        detailLoading: false,
      };
    case GET_MATRIMONY_PROFILE_BY_ID_ERROR:
      return {
        ...state,
        detailLoading: true,
      };
    case MATRIMONY_CREATED_ERROR:
      return {
        ...state,
        created: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default matrimonyReducer;
