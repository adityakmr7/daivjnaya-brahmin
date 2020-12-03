import {
  CREATE_CAREER_ERROR,
  CREATE_CAREER_LOADING,
  CREATE_CAREER_SUCCESS,
  POST_CV_ERROR,
  POST_CV_SUCCESS,
  POST_TALENT_ERROR,
  POST_TALENT_LOADING,
  POST_TALENT_SUCCESS,
} from "./../actions/constants/careerConstant";
import { POST_CV_LOADING } from "../actions/constants/careerConstant";

const initialState = {
  postingCv: false,
  postedCv: "",
  errorPosting: "",
  // PostJob
  postingNewJob: false,
  postedNewJob: "",
  errorPostingNewJob: "",
  // Talents
  postingTalent: false,
  postedTalent: "",
  errorPostingTalent: "",
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
    // Posting Job
    case CREATE_CAREER_LOADING:
      return {
        ...state,
        postingNewJob: true,
        postedNewJob: "",
        errorPostingNewJob: "",
      };
    case CREATE_CAREER_SUCCESS:
      return {
        ...state,
        postingNewJob: false,
        postedNewJob: action.payload,
        errorPostingNewJob: "",
      };
    case CREATE_CAREER_ERROR:
      return {
        ...state,
        postingNewJob: false,
        postedNewJob: "",
        errorPostingNewJob: "Something went wrong",
      };
    // Talent
    case POST_TALENT_LOADING:
      return {
        ...state,
        postingTalent: true,
        postedTalent: "",
        errorPostingTalent: "",
      };
    case POST_TALENT_SUCCESS:
      return {
        ...state,
        postingTalent: false,
        postedTalent: action.payload,
        errorPostingTalent: "",
      };
    case POST_TALENT_ERROR:
      return {
        ...state,
        postingTalent: false,
        postedTalent: "",
        errorPostingTalent: action.error,
      };
    default:
      return {
        ...state,
      };
  }
};