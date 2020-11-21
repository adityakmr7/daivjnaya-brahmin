import { postNewHubProps } from "./../Screens/communityHub/interfaces";
import restServices from "../services/restServices";
import * as constant from "./constants/hubConstant";

export const getAllHub = () => (dispatch: any) => {
  dispatch({
    type: constant.GET_ALL_HUB_LOADING,
  });

  const _rest = new restServices();
  _rest
    .get("/hub")
    .then((res) => {
      console.log("gettting Hube", res);
      dispatch({
        type: constant.GET_ALL_HUB_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("eror Hub", err);
      dispatch({
        type: constant.GET_ALL_HUB_ERROR,
        error: err,
      });
    });
};

export const postNewHub = (data: any, images: []) => async (dispatch: any) => {
  dispatch({
    type: constant.POST_ALL_HUB_LOADING,
  });

  const dataToSend = JSON.stringify({
    about: data.aboutHub,
    address: {
      addressLine1: data.address1,
      addressLine2: data.address2,
      city: data.city,
      country: data.country,
      latitude: data.latitude,
      longitude: data.longitude,
      pincode: data.pinCode,
      state: data.state,
    },
    city: data.city,
    cover: data.cover,
    email: data.email,
    facilities: data.facilities,
    gallery: images,
    hubName: data.communityName,
    isAcceptTmc: data.tmc,
    isCallback: data.callback,
    phoneNumber: data.contactNumber,
    yourName: data.fullName,
  });

  const _rest = new restServices();
  _rest
    .post("/hub", dataToSend)
    .then((res) => {
      dispatch({
        type: constant.POST_ALL_HUB_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: constant.POST_ALL_HUB_ERROR,
        error: err,
      });
    });
};

export const getAllState = () => (dispatch: any) => {
  dispatch({
    type: constant.GET_ALL_STATE_LOADING,
  });

  const _rest = new restServices();
  _rest
    .get("/hub/state")
    .then((res) => {
      console.log("getAllstate", res);
      dispatch({
        type: constant.GET_ALL_STATE_SUCCESS,
        payload: res.data._embedded,
      });
    })
    .catch((err) => {
      dispatch({
        type: constant.GET_ALL_STATE_ERROR,
        error: err,
      });
    });
};

export const filterHubByCityIsActive = (
  state: string,
  city: string,
  isActivated: boolean
) => (dispatch: any) => {
  dispatch({
    type: constant.GET_ALL_HUB_POST_FILTER_LOADING,
  });

  const _rest = new restServices();
  _rest
    .get(`/hub/filter?state=${state}&city=${city}&isActivated=${isActivated}`)
    .then((res) => {
      dispatch({
        type: constant.GET_ALL_HUB_POST_FILTER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: constant.GET_ALL_HUB_POST_FILTER_ERROR,
        error: err,
      });
    });
};

/**
 * !
 * No Use Right Now
 */
type createMemberProps = {
  hubId: 0;
  type: string;
  userId: 0;
};

export const createNewHubMember = (data: createMemberProps) => (
  dispatch: any
) => {
  dispatch({
    type: constant.POST_ALL_HUB_MEMBER_LOADING,
  });

  const _rest = new restServices();
  _rest
    .post("/hub", data)
    .then((res) => {
      console.log("gettting Hube", res);
      dispatch({
        type: constant.POST_ALL_HUB_MEMBER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("eror Hub", err);
      dispatch({
        type: constant.POST_ALL_HUB_MEMBER_ERROR,
        error: err,
      });
    });
};

/**
 *
 * @param hid number
 */
export const getHubByHid = (hid: number) => (dispatch: any) => {
  dispatch({
    type: constant.GET_ALL_HUB_BY_ID_LOADING,
  });

  const _rest = new restServices();
  _rest
    .get(`/hub/${hid}`)
    .then((res) => {
      console.log("Getting Hub Detail", res);
      dispatch({
        type: constant.GET_ALL_HUB_BY_ID_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("eror Hub", err);
      dispatch({
        type: constant.GET_ALL_HUB_BY_ID_ERROR,
        error: err,
      });
    });
};

export const updateHubByHid = (hid: number) => (dispatch: any) => {
  dispatch({
    type: constant.UPDATE_ALL_HUB_BY_ID_LOADING,
  });

  const _rest = new restServices();
  _rest
    .put(`/hub/${hid}`, {})
    .then((res) => {
      console.log("gettting Hube", res);
      dispatch({
        type: constant.UPDATE_ALL_HUB_BY_ID_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("eror Hub", err);
      dispatch({
        type: constant.UPDATE_ALL_HUB_BY_ID_ERROR,
        error: err,
      });
    });
};

export const updateHubImageByHid = (hid: number) => (dispatch: any) => {
  dispatch({
    type: constant.UPDATE_IMAGE_HUB_BY_ID_LOADING,
  });

  const _rest = new restServices();
  _rest
    .put(`/hub/${hid}/image`, {})
    .then((res) => {
      console.log("gettting Hube", res);
      dispatch({
        type: constant.UPDATE_IMAGE_HUB_BY_ID_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("eror Hub", err);
      dispatch({
        type: constant.UPDATE_IMAGE_HUB_BY_ID_ERROR,
        error: err,
      });
    });
};

export const getHubMemberHid = (hid: number) => (dispatch: any) => {
  dispatch({
    type: constant.GET_HUB_MEMBER_LOADING,
  });

  const _rest = new restServices();
  _rest
    .get(`/hub/${hid}`)
    .then((res) => {
      console.log("gettting Hube", res);
      dispatch({
        type: constant.GET_HUB_MEMBER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("eror Hub", err);
      dispatch({
        type: constant.GET_HUB_MEMBER_ERROR,
        error: err,
      });
    });
};
