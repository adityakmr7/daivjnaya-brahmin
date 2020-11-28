import {
  POST_CV_ERROR,
  POST_CV_SUCCESS,
} from "./../actions/constants/careerConstant";
import { POST_CV_LOADING } from "../actions/constants/careerConstant";

const initialState = {
  postingCv: false,
  postedCv: "",
  errorPosting: "",
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case POST_CV_LOADING:
      return {
        ...state,
        postingCv: true,
        postedCv: "",
        errorPosting: "",
      };
    case POST_CV_SUCCESS:
      return {
        ...state,
        postingCv: false,
        postedCv: action.payload,
        errorPosting: "",
      };
    case POST_CV_ERROR:
      return {
        ...state,
        postedCv: "",
        errorPosting: "Please Try Again",
      };

    default:
      return {
        ...state,
      };
  }
};
