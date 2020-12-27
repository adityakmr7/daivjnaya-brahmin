import { actionSheetDefaultProps } from "react-native-propel-kit";
import restServices from "../services/restServices";
import {
  CREATE_CAREER_LOADING,
  CREATE_CAREER_SUCCESS,
  CREATE_CAREER_ERROR,
  POST_CV_LOADING,
  POST_CV_SUCCESS,
  POST_CV_ERROR,
  POST_TALENT_LOADING,
  POST_TALENT_SUCCESS,
  POST_TALENT_ERROR,
  GET_CAREER_CV_LOADING,
  GET_CAREER_CV_SUCCESS,
  GET_CAREER_CV_ERROR,
  GET_JOB_LOADING,
  GET_JOB_SUCCESS,
  GET_JOB_ERROR,
  GET_JOB_POSTING_LOADING,
  GET_JOB_POSTING_SUCCESS,
  GET_JOB_POSTING_ERROR,
  GET_CAREER_TALENT_LOADING,
  GET_CAREER_TALENT_SUCCESS,
  GET_CAREER_TALENT_ERROR,
  GET_ALL_CAREER_TIPS_LOADING,
  GET_ALL_CAREER_TIPS_SUCCESS,
  GET_ALL_CAREER_TIPS_ERROR,
  GET_CAREER_TIPS_DETAIL_SUCCESS,
  GET_CAREER_TIPS_DETAIL_LOADING,
  GET_CAREER_TIPS_DETAIL_ERROR,
  GET_CAREER_PROFILE_LOADING,
  GET_CAREER_PROFILE_SUCCESS,
  GET_CAREER_PROFILE_ERROR,
  GET_ALL_CAREER_NETWORK_ERROR,
  GET_ALL_CAREER_NETWORK_SUCCESS,
  GET_ALL_CAREER_NETWORK_LOADING,
  GET_ALL_CAREER_NETWORK_INVITED_LOADING,
  GET_ALL_CAREER_NETWORK_INVITED_SUCCESS,
  GET_ALL_CAREER_NETWORK_INVITED_ERROR,
  GET_ALL_CAREER_NETWORK_INVITES_LOADING,
  GET_ALL_CAREER_NETWORK_INVITES_SUCCESS,
  GET_ALL_CAREER_NETWORK_INVITES_ERROR,
  GET_PROFILE_CV_LOADING,
  GET_PROFILE_CV_SUCCESS,
  GET_PROFILE_CV_ERROR,
  GET_CANDIDATES_PROFILE_BY_ID_LOADING,
  GET_CANDIDATES_PROFILE_BY_ID_SUCCESS,
  GET_CANDIDATES_PROFILE_BY_ID_ERROR,
} from "./constants/careerConstant";

export const createNewCareer = (data: any) => (dispatch: any) => {
  dispatch({
    type: CREATE_CAREER_LOADING,
  });

  const _rest = new restServices();
  _rest
    .post("/career/jobPosting", {})
    .then((res) => {
      dispatch({
        type: CREATE_CAREER_SUCCESS,
        payload: res,
      });
    })
    .catch((err) => {
      dispatch({
        type: CREATE_CAREER_ERROR,
        error: err,
      });
    });
};

/**
 * Find Job
 * @param data
 */
export const postNewCV = (data: any) => (dispatch: any) => {
  dispatch({
    type: POST_CV_LOADING,
  });
  const _rest = new restServices();
  _rest
    .post("/career/cv", data)
    .then((res) => {
      dispatch({
        type: POST_CV_SUCCESS,
        payload: res.data.url,
      });
    })
    .catch((err) => {
      dispatch({
        type: POST_CV_ERROR,
        error: err,
      });
    });
};

export const postTalents = (data: any) => (dispatch: any) => {
  dispatch({
    type: POST_TALENT_LOADING,
  });
  const _rest = new restServices();
  _rest
    .post("/career/talent", data)
    .then((res) => {
      dispatch({
        type: POST_TALENT_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: POST_TALENT_ERROR,
        payload: err,
      });
    });
};

/**
 * @get
 * career/cv/all
 */

export const getCareerCv = () => (dispatch: any) => {
  dispatch({
    type: GET_CAREER_CV_LOADING,
  });
  const _rest = new restServices();
  _rest
    .get("/career/cv/all")
    .then((res) => {
      dispatch({
        type: GET_CAREER_CV_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_CAREER_CV_ERROR,
        error: err,
      });
    });
};

export const getCandidatesProfileById = (userId: number) => (dispatch: any) => {
  dispatch({
    type: GET_CANDIDATES_PROFILE_BY_ID_LOADING,
  });
  const _rest = new restServices();
  _rest
    .get(``)
    .then((res) => {
      dispatch({
        type: GET_CANDIDATES_PROFILE_BY_ID_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_CANDIDATES_PROFILE_BY_ID_ERROR,
        error: "Something Went Wrong" || err,
      });
    });
};

/**
 * @get
 * career/job
 */

export const getJob = (q: string) => (dispatch: any) => {
  dispatch({
    type: GET_JOB_LOADING,
  });

  const _rest = new restServices();
  _rest
    .get(`/career/job?q=${q}`)
    .then((res) => {
      dispatch({
        type: GET_JOB_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_JOB_ERROR,
        error: err,
      });
    });
};

/**
 * @get
 * /career/jobPosting
 */

export const getJobPosting = () => (dispatch: any) => {
  dispatch({
    type: GET_JOB_POSTING_LOADING,
  });
  const _rest = new restServices();
  _rest
    .get("/career/jobPosting")
    .then((res) => {
      dispatch({
        type: GET_JOB_POSTING_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_JOB_POSTING_ERROR,
        error: err,
      });
    });
};

/**
 * @GET
 * /career/talent
 */

export const getCareerTalent = () => (dispatch: any) => {
  dispatch({
    type: GET_CAREER_TALENT_LOADING,
  });
  const _rest = new restServices();
  _rest
    .get("/career/talent")
    .then((res) => {
      dispatch({
        type: GET_CAREER_TALENT_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_CAREER_TALENT_ERROR,
        error: err,
      });
    });
};

/**
 *  Career Tips
 * @get /career/tip
 */

export const getAllCareerTips = () => (dispatch: any) => {
  dispatch({
    type: GET_ALL_CAREER_TIPS_LOADING,
  });
  const _rest = new restServices();
  _rest
    .get(`/career/tip`)
    .then((res) => {
      dispatch({
        type: GET_ALL_CAREER_TIPS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ALL_CAREER_TIPS_ERROR,
        error: err,
      });
    });
};
/**
 *  Career Tips
 * @get /career/tip
 */

export const getCareerTipsDetail = (nId: number) => (dispatch: any) => {
  dispatch({
    type: GET_CAREER_TIPS_DETAIL_LOADING,
  });
  const _rest = new restServices();
  _rest
    .get(`/career/tip/${nId}`)
    .then((res) => {
      dispatch({
        type: GET_CAREER_TIPS_DETAIL_SUCCESS,
        payload: res,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_CAREER_TIPS_DETAIL_ERROR,
        error: err,
      });
    });
};

export const getCareerProfile = (userId: number) => (dispatch: any) => {
  dispatch({
    type: GET_CAREER_PROFILE_LOADING,
  });
  const _rest = new restServices();
  _rest
    .get(`/user/${userId}`)
    .then((res) => {
      dispatch({
        type: GET_CAREER_PROFILE_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_CAREER_PROFILE_ERROR,
        error: err,
      });
    });
};

/**
 *  Career Network Service
 *  @ get
 */

export const getCareerNetwork = () => (dispatch: any) => {
  dispatch({
    type: GET_ALL_CAREER_NETWORK_LOADING,
  });
  const _rest = new restServices();
  _rest
    .get("/career/network")
    .then((res) => {
      dispatch({
        type: GET_ALL_CAREER_NETWORK_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ALL_CAREER_NETWORK_ERROR,
        error: err,
      });
    });
};

/**
 *  Career Network Service Invited
 *  @ get
 */

export const getCareerNetworkInvited = () => (dispatch: any) => {
  dispatch({
    type: GET_ALL_CAREER_NETWORK_INVITED_LOADING,
  });
  const _rest = new restServices();
  _rest
    .get("/career/network/invited")
    .then((res) => {
      dispatch({
        type: GET_ALL_CAREER_NETWORK_INVITED_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ALL_CAREER_NETWORK_INVITED_ERROR,
        error: err,
      });
    });
};

/**
 *  Career Network Service Invited
 *  @ get
 */

export const getCareerNetworkInvitation = () => (dispatch: any) => {
  dispatch({
    type: GET_ALL_CAREER_NETWORK_INVITES_LOADING,
  });
  const _rest = new restServices();
  _rest
    .get("/career/network/invites")
    .then((res) => {
      dispatch({
        type: GET_ALL_CAREER_NETWORK_INVITES_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ALL_CAREER_NETWORK_INVITES_ERROR,
        error: err,
      });
    });
};

export const getProfileCv = () => (dispatch: any) => {
  dispatch({
    type: GET_PROFILE_CV_LOADING,
  });
  const _rest = new restServices();
  _rest
    .get("/career/cv")
    .then((res) => {
      dispatch({
        type: GET_PROFILE_CV_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_PROFILE_CV_ERROR,
        error: "Something went wrong" || err,
      });
    });
};
