import {
  GET_ALL_BANNER_ERROR,
  GET_ALL_BANNER_LOADING,
  GET_ALL_BANNER_SUCCESS,
} from "./../actions/constants/bannerConstant";
const initialState = {
  loading: false,
  bannerData: "",
  error: "",
};
export default (state = initialState, action: any) => {
  switch (action.type) {
    case GET_ALL_BANNER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_BANNER_SUCCESS:
      return {
        ...state,
        loading: false,
        bannerData: action.payload,
      };
    case GET_ALL_BANNER_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return {
        ...state,
      };
  }
};
