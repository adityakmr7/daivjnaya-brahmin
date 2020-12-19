import {
  USER_AUTHORIZED,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  USER_SIGN_UP,
  USER_SIGN_UP_ERROR,
  LOGIN_USER_ERROR,
  LOGIN_USER_LOADING,
  USER_SIGN_UP_LOADING,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_ERROR,
  PASSWORD_RESET_LOADING,
  PASSWORD_CHANGE_OTP_LOADING,
  PASSWORD_CHANGE_OTP_SUCCESS,
  PASSWORD_CHANGE_OTP_ERROR,
} from "./constants/authConstant";
import { _sign_in_user, _login_user } from "./../api/endpoints";
import axios, { AxiosPromise, AxiosRequestConfig, AxiosResponse } from "axios";
import restServices from "../services/restServices";

export const userSignup = (
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  phoneNumber: string,
  navigation: any
) => (dispatch: any) => {
  dispatch({
    type: USER_SIGN_UP_LOADING,
  });
  var data = JSON.stringify({
    email: email,
    firstName: firstName,
    lastName: lastName,
    password: password,
    phoneNumber: phoneNumber,
  });

  let config: AxiosRequestConfig = {
    method: "post",
    url: "http://3.6.104.144/signup",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then((res) => {
      // Add Snackbar here
      console.log("autSignupSuccess", res);
      dispatch({
        type: USER_SIGN_UP,
        payload: res.data,
      });
      navigation.navigate("login");
    })
    .catch((err) => {
      dispatch({
        type: USER_SIGN_UP_ERROR,
        message: err.message,
      });
    });
};

export const userLogin = (email: string, password: string, navigation: any) => (
  dispatch: any
) => {
  dispatch({
    type: LOGIN_USER_LOADING,
  });
  const base64 = require("base-64");
  const hash = "Basic " + base64.encode("karthik:karthik");
  let data = new FormData();
  data.append("username", email);
  data.append("password", password);
  data.append("grant_type", "password");
  let config: AxiosRequestConfig = {
    method: "post",
    url: _login_user,
    headers: {
      Authorization: hash,
    },
    data: data,
  };
  axios(config)
    .then((res: AxiosResponse) => {
      const _rest = new restServices();
      _rest.saveToken(res.data);
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: res.data,
      });

      // navigation.navigate("Home");
    })
    .catch((err) => {
      dispatch({
        type: LOGIN_USER_ERROR,
        error: err,
      });
    });
};

export const userAuthorized = () => (dispatch: any) => {
  dispatch({
    type: USER_AUTHORIZED,
  });
};

export const logoutUser = () => async (dispatch: any) => {
  dispatch({
    type: LOGOUT_USER,
  });
  let _res = new restServices();
  await _res.removeAccessToken();
};

export const resetPassword = (email: string, navigation: any) => (
  dispatch: any
) => {
  dispatch({
    type: PASSWORD_RESET_LOADING,
  });
  const _rest = new restServices();
  _rest
    .authPut(`/resetpassword?email=${email}`)
    .then((res) => {
      if (res.status === 200) {
        dispatch({
          type: PASSWORD_RESET_SUCCESS,
          payload: "Password Reset SuccessFull",
        });
        navigation.navigate("Otp", {
          email: email,
        });
      }
    })
    .catch((err) => {
      dispatch({
        type: PASSWORD_RESET_ERROR,
        error: err,
      });
    });
};

export const changePasswordForOtp = (
  data: {
    email: string;
    otp: string;
    password: string;
  },
  navigation: any
) => (dispatch: any) => {
  dispatch({
    type: PASSWORD_CHANGE_OTP_LOADING,
  });

  const _rest = new restServices();
  _rest
    .authPut(
      `/changepassword?email=${data.email}&otp=${parseInt(data.otp)}&password=${
        data.password
      }`
    )
    .then((res) => {
      if (res.status === 200) {
        dispatch({
          type: PASSWORD_CHANGE_OTP_SUCCESS,
          payload: res.data,
        });
        navigation.navigate("ResetComplete");
      }
    })
    .catch((err) => {
      dispatch({
        type: PASSWORD_CHANGE_OTP_ERROR,
        error: err,
      });
    });
};
