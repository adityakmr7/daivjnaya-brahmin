import { _user_update_user } from "./../api/endpoints";
import {
  USER_DATA_LOADING,
  USER_DATA_SUCCESS,
  USER_DATA_ERROR,
  USER_EDIT_PROFILE_SUCCESS,
  USER_EDIT_PROFILE_ERROR,
  USER_PROFILE_PICTURE_SUCCESS,
  USER_PROFILE_PICTURE_ERROR,
  UPDATE_COVER_IMAGE_SUCCESS,
  UPDATE_COVER_IMAGE_ERROR,
  GET_USER_DETAIL_BY_ID_LOADING,
  GET_USER_DETAIL_BY_ID_SUCCESS,
  GET_USER_DETAIL_BY_ID_ERROR,
  GET_ALL_USER_SUCCESS,
  GET_ALL_USER_ERROR,
  GET_ALL_USER_LOADING,
} from "./constants/userConstants";
import axios, { AxiosRequestConfig } from "axios";
import restServices from "../services/restServices";
import { _user_get_user } from "../api/endpoints";
import { userProfileProps } from "../Screens/MyProfile/interfaces";
export const getUserDetail = () => (dispatch: any) => {
  dispatch({
    type: USER_DATA_LOADING,
  });
  const _rest = new restServices();
  _rest
    .get(_user_get_user)
    .then((res) => {
      dispatch({
        type: USER_DATA_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: USER_DATA_ERROR,
        error: err,
      });
    });
};

export const editProfile = (data: userProfileProps, navigation: any) => (
  dispatch: any
) => {
  const _rest = new restServices();
  _rest
    .put(
      `${_user_update_user}?firstName=${data.firstName}&lastName=${data.lastName}&phoneNumber=${data.phoneNumber}&address=${data.address}&city=${data.city}&state=${data.state}&pincode=${data.pincode}&companyName=${data.companyName}&education=${data.education}&designation=${data.designation}&livesIn=${data.livesIn}&about=${data.about}&interest=${data.interest}`,
      {}
    )
    .then((res) => {
      dispatch({
        type: USER_EDIT_PROFILE_SUCCESS,
        payload: res.status,
      });
      navigation.pop();
    })
    .catch((err) => {
      dispatch({
        type: USER_EDIT_PROFILE_ERROR,
        error: err,
      });
    });
};

//Forgot password
export const updatePassword = (data: string) => async (dispatch: any) => {
  const _rest = new restServices();
  _rest
    .put("/user/password", data)
    .then((res) => console.log("updatePass", res))
    .catch((err) => console.log("updatePass", err));
};

export const updateUserProfilePicture = (url: string) => async (
  dispatch: any
) => {
  const mime = require("mime");
  var data = new FormData();
  const newImageUri = "file:///" + url.split("file:/").join("");
  data.append("profilepic", {
    uri: newImageUri,
    type: mime.getType(newImageUri),
    name: newImageUri.split("/").pop(),
  });
  const _rest = new restServices();
  const token = await _rest.getAccessToken();
  var config: AxiosRequestConfig = {
    method: "put",
    url: "http://3.6.104.144/user/profilePic",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "multipart/form-data",
    },
    data: data,
  };
  axios(config)
    .then((res) => {
      dispatch({
        type: USER_PROFILE_PICTURE_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: USER_PROFILE_PICTURE_ERROR,
        error: err,
      });
    });
};

export const updateCoverProfile = (url: string) => async (dispatch: any) => {
  const mime = require("mime");
  var data = new FormData();
  const newImageUri = "file:///" + url.split("file:/").join("");
  data.append("profilepic", {
    uri: newImageUri,
    type: mime.getType(newImageUri),
    name: newImageUri.split("/").pop(),
  });
  const _rest = new restServices();
  const token = await _rest.getAccessToken();
  var config: AxiosRequestConfig = {
    method: "put",
    url: "http://3.6.104.144/user/coverPic",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "multipart/form-data",
    },
    data: data,
  };
  axios(config)
    .then((res) => {
      dispatch({
        type: UPDATE_COVER_IMAGE_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: UPDATE_COVER_IMAGE_ERROR,
        error: err,
      });
    });
};

export const getUserDetailById = (userId: number) => (dispatch: any) => {
  dispatch({
    type: GET_USER_DETAIL_BY_ID_LOADING,
  });

  const _rest = new restServices();
  _rest
    .get(`/user/${userId}`)
    .then((res) => {
      dispatch({
        type: GET_USER_DETAIL_BY_ID_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_USER_DETAIL_BY_ID_ERROR,
        error: err,
      });
    });
};

export const getAllUser = (q: string) => (dispatch: any) => {
  dispatch({
    type: GET_ALL_USER_LOADING,
  });
  const _rest = new restServices();
  _rest
    .get(`/user/search/?q=${q}`)
    .then((res) => {
      dispatch({
        type: GET_ALL_USER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ALL_USER_ERROR,
        error: err,
      });
    });
};
