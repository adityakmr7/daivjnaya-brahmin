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

type postNewHubProps = {
  city: string;
  email: string;
  location: {
    latitude: number;
    locationName: string;
    longitude: number;
  };
  name: string;
  phoneNumber: string;
};

export const postNewHub = (data: postNewHubProps) => (dispatch: any) => {
  dispatch({
    type: constant.POST_ALL_HUB_LOADING,
  });

  const _rest = new restServices();
  _rest
    .post("/hub", data)
    .then((res) => {
      console.log("gettting Hube", res);
      dispatch({
        type: constant.POST_ALL_HUB_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("eror Hub", err);
      dispatch({
        type: constant.POST_ALL_HUB_ERROR,
        error: err,
      });
    });
};

export const filterHubByCityIsActive = (city: string, isActivated: boolean) => (
  dispatch: any
) => {
  dispatch({
    type: constant.GET_ALL_HUB_POST_FILTER_LOADING,
  });

  const _rest = new restServices();
  _rest
    .get(`/hub/filter?city=${city}&isActivated=${isActivated}`)
    .then((res) => {
      console.log("gettting Hube", res);
      dispatch({
        type: constant.GET_ALL_HUB_POST_FILTER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("eror Hub", err);
      dispatch({
        type: constant.GET_ALL_HUB_POST_FILTER_ERROR,
        error: err,
      });
    });
};

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

export const getHubByHid = (hid: number) => (dispatch: any) => {
  dispatch({
    type: constant.GET_ALL_HUB_BY_ID_LOADING,
  });

  const _rest = new restServices();
  _rest
    .get(`/hub/${hid}`)
    .then((res) => {
      console.log("gettting Hube", res);
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
