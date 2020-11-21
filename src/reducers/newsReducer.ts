import {
  GET_ALL_NEWS_LOADING,
  GET_ALL_NEWS_SUCCESS,
  GET_ALL_NEWS_ERROR,
} from "./../actions/constants/newsConstant";

const initialState = {
  loading: false,
  news: [],
  error: "",
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case GET_ALL_NEWS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_NEWS_SUCCESS:
      return {
        ...state,
        news: action.payload,
        loading: false,
      };
    case GET_ALL_NEWS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return {
        ...state,
      };
  }
};
