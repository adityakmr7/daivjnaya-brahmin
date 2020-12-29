import {
  CREATE_CAREER_ERROR,
  CREATE_CAREER_LOADING,
  CREATE_CAREER_SUCCESS,
  GET_ALL_CAREER_TIPS_ERROR,
  GET_ALL_CAREER_TIPS_LOADING,
  GET_ALL_CAREER_TIPS_SUCCESS,
  GET_CAREER_CV_ERROR,
  GET_CAREER_CV_LOADING,
  GET_CAREER_CV_SUCCESS,
  GET_CAREER_TALENT_ERROR,
  GET_CAREER_TALENT_LOADING,
  GET_CAREER_TALENT_SUCCESS,
  GET_CAREER_TIPS_DETAIL_ERROR,
  GET_CAREER_TIPS_DETAIL_LOADING,
  GET_CAREER_TIPS_DETAIL_SUCCESS,
  GET_JOB_ERROR,
  GET_JOB_LOADING,
  GET_JOB_SUCCESS,
  POST_CV_ERROR,
  POST_CV_SUCCESS,
  POST_TALENT_ERROR,
  POST_TALENT_LOADING,
  POST_TALENT_SUCCESS,
  GET_CAREER_PROFILE_LOADING,
  GET_CAREER_PROFILE_SUCCESS,
  GET_CAREER_PROFILE_ERROR,
  GET_ALL_CAREER_NETWORK_ERROR,
  GET_ALL_CAREER_NETWORK_SUCCESS,
  GET_ALL_CAREER_NETWORK_LOADING,
  GET_ALL_CAREER_NETWORK_INVITED_LOADING,
  GET_ALL_CAREER_NETWORK_INVITED_SUCCESS,
  GET_ALL_CAREER_NETWORK_INVITED_ERROR,
  GET_ALL_CAREER_NETWORK_INVITES_ERROR,
  GET_ALL_CAREER_NETWORK_INVITES_SUCCESS,
  GET_ALL_CAREER_NETWORK_INVITES_LOADING,
  GET_PROFILE_CV_LOADING,
  GET_PROFILE_CV_SUCCESS,
  GET_PROFILE_CV_ERROR,
  GET_CANDIDATES_PROFILE_BY_ID_LOADING,
  GET_CANDIDATES_PROFILE_BY_ID_SUCCESS,
  GET_CANDIDATES_PROFILE_BY_ID_ERROR,
  GET_JOB_PROFILE_LOADING,
  GET_JOB_PROFILE_SUCCESS,
  GET_JOB_PROFILE_ERROR,
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
  //CareerCv
  careerCvLoading: false,
  careerCvAll: "",
  careerCvError: "",
  //jobs
  jobsLoading: false,
  jobsAll: "",
  jobsError: "",
  //CareerTips
  tipsLoading: false,
  tipsAll: "",
  tipsError: "",
  // careerTipsDetail
  tipsDetailLoading: false,
  tipsDetailAll: "",
  tipsDetailError: "",
  // talent
  talentLoading: false,
  talentAll: "",
  talentError: "",
  // CareerProfile
  careerProfileLoading: false,
  careerProfileData: "",
  careerProfileError: "",
  // Network From here
  careerAllNetworkLoading: false,
  careerAllNetworkData: "",
  careerAllNetworkError: "",
  // network invited
  careerNetworkInvitedLoading: false,
  careerNetworkInvitedData: "",
  careerNetworkInvitedError: "",

  //network invites
  careerInvitesLoading: false,
  careerInvitesData: "",
  careerInvitesError: "",
  // get Profile Cv
  cvProfileLoading: false,
  cvProfileSuccess: "",
  cvProfileError: "",
  // candidatesProfile By id
  candidatesProfileLoading: false,
  candidatesProfileData: "",
  candidatesProfileError: "",
  // jobProfile
  jobProfileLoading: false,
  jobProfileSuccess: "",
  jobProfileError: "",
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
        postingCv: false,
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
    // GET ALL CAREER CV
    case GET_CAREER_CV_LOADING:
      return {
        ...state,
        careerCvLoading: true,
      };
    case GET_CAREER_CV_SUCCESS:
      return {
        ...state,
        careerCvLoading: false,
        careerCvAll: action.payload._embedded.cVResourceList,
        careerCvError: "",
      };
    case GET_CAREER_CV_ERROR:
      return {
        ...state,
        careerCvLoading: false,
        careerCvError: "Something Went Wrong",
      };
    // AllJobs
    case GET_JOB_LOADING:
      return {
        ...state,
        jobsLoading: true,
        jobsError: "",
      };
    case GET_JOB_SUCCESS:
      return {
        ...state,
        jobsLoading: false,
        jobsAll: action.payload._embedded.jobPostingResourceList,
        jobsError: "",
      };
    case GET_JOB_ERROR:
      return {
        ...state,
        jobsLoading: false,
        jobsError: "Something Went Wrong",
      };
    //CareerTips
    case GET_ALL_CAREER_TIPS_LOADING:
      return {
        ...state,
        tipsLoading: true,
        tipsError: "",
      };
    case GET_ALL_CAREER_TIPS_SUCCESS:
      return {
        ...state,
        tipsLoading: false,
        tipsAll: action.payload._embedded.careerTipResourceList,
        tipsError: "",
      };
    case GET_ALL_CAREER_TIPS_ERROR:
      return {
        ...state,
        tipsLoading: false,
        tipsAll: "",
        tipsError: "Something Went Wrong",
      };
    // CareerTips detail
    case GET_CAREER_TIPS_DETAIL_LOADING:
      return {
        ...state,
        tipsDetailLoading: true,
        tipsDetailError: "",
      };
    case GET_CAREER_TIPS_DETAIL_SUCCESS:
      return {
        ...state,
        tipsDetailLoading: false,
        tipsDetailAll: action.payload.data,
        tipsDetailError: "",
      };
    case GET_CAREER_TIPS_DETAIL_ERROR:
      return {
        ...state,
        tipsDetailLoading: false,
        tipsDetailAll: "",
        tipsDetailError: "Something Went wrong",
      };
    // career Talents
    case GET_CAREER_TALENT_LOADING:
      return {
        ...state,
        talentLoading: true,
      };
    case GET_CAREER_TALENT_SUCCESS:
      return {
        ...state,
        talentLoading: false,
        talentAll: action.payload._embedded.talentResourceList,
        talentError: "",
      };
    case GET_CAREER_TALENT_ERROR:
      return {
        ...state,
        talentLoading: false,
        talentAll: "",
        talentError: "Something went Wrong",
      };
    //Career Profile
    case GET_CAREER_PROFILE_LOADING:
      return {
        ...state,
        careerProfileLoading: true,
      };
    case GET_CAREER_PROFILE_SUCCESS:
      return {
        ...state,
        careerProfileLoading: false,
        careerProfileData: action.payload,
        careerProfileError: "",
      };
    case GET_CAREER_PROFILE_ERROR:
      return {
        ...state,
        careerProfileLoading: false,
        careerProfileData: "",
        careerProfileError: "Something went wrong",
      };
    case GET_ALL_CAREER_NETWORK_LOADING:
      return {
        ...state,
        careerAllNetworkLoading: true,
        careerAllNetworkData: "",
        careerAllNetworkError: "",
      };
    case GET_ALL_CAREER_NETWORK_SUCCESS:
      return {
        ...state,
        careerAllNetworkLoading: false,
        careerAllNetworkData: action.payload._embedded.networkResourceList,
        careerAllNetworkError: "",
      };
    case GET_ALL_CAREER_NETWORK_ERROR:
      return {
        ...state,
        careerAllNetworkLoading: false,
        careerAllNetworkData: "",
        careerAllNetworkError: "Something went wrong",
      };
    // Network invited
    case GET_ALL_CAREER_NETWORK_INVITED_LOADING:
      return {
        ...state,
        careerNetworkInvitedLoading: true,
        careerNetworkInvitedData: "",
        careerNetworkInvitedError: "",
      };
    case GET_ALL_CAREER_NETWORK_INVITED_SUCCESS:
      return {
        ...state,
        careerNetworkInvitedLoading: false,
        careerNetworkInvitedData: action.payload,
        careerNetworkInvitedError: "",
      };
    case GET_ALL_CAREER_NETWORK_INVITED_ERROR:
      return {
        ...state,
        careerNetworkInvitedLoading: false,
        careerNetworkInvitedData: "",
        careerNetworkInvitedError: "Something Went Wrong",
      };

    // Network invites
    case GET_ALL_CAREER_NETWORK_INVITES_LOADING:
      return {
        ...state,
        careerInvitesLoading: true,
        careerInvitesData: "",
        careerInvitesError: "",
      };
    case GET_ALL_CAREER_NETWORK_INVITES_SUCCESS:
      return {
        ...state,
        careerInvitesLoading: false,
        careerInvitesData:
          action.payload._embedded.networkInvitationResourceList,
        careerInvitesError: "",
      };
    case GET_ALL_CAREER_NETWORK_INVITES_ERROR:
      return {
        ...state,
        careerInvitesLoading: false,
        careerInvitesData: "",
        careerInvitesError: "Something Went wrong",
      };

    case GET_PROFILE_CV_LOADING:
      return {
        ...state,
        cvProfileLoading: true,
        cvProfileSuccess: "",
        cvProfileError: "",
      };
    case GET_PROFILE_CV_SUCCESS:
      return {
        ...state,
        cvProfileLoading: false,
        cvProfileSuccess: action.payload,
        cvProfileError: "",
      };
    case GET_PROFILE_CV_ERROR:
      return {
        ...state,
        cvProfileLoading: false,
        cvProfileSuccess: "",
        cvProfileError: action.error,
      };
    case GET_CANDIDATES_PROFILE_BY_ID_LOADING:
      return {
        ...state,
        candidatesProfileLoading: true,
        candidatesProfileData: "",
        candidatesProfileError: "",
      };
    case GET_CANDIDATES_PROFILE_BY_ID_SUCCESS:
      return {
        ...state,
        candidatesProfileLoading: false,
        candidatesProfileData: action.payload,
        candidatesProfileError: "",
      };
    case GET_CANDIDATES_PROFILE_BY_ID_ERROR:
      return {
        ...state,
        candidatesProfileLoading: false,
        candidatesProfileData: "",
        candidatesProfileError: action.error,
      };
    case GET_JOB_PROFILE_LOADING:
      return {
        ...state,
        jobProfileLoading: true,
        jobProfileSuccess: "",
        jobProfileError: "",
      };
    case GET_JOB_PROFILE_SUCCESS:
      return {
        ...state,
        jobProfileLoading: false,
        jobProfileSuccess: action.payload,
        jobProfileError: "",
      };
    case GET_JOB_PROFILE_ERROR:
      return {
        ...state,
        jobProfileLoading: false,
        jobProfileSuccess: "",
        jobProfileError: "Something Went Wrong" || action.error,
      };
    default:
      return {
        ...state,
      };
  }
};
