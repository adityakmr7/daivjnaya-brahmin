import { LOGIN_USER_TOKEN, SIGN_IN_USER } from "./../api/endpoints";
import axios, { AxiosPromise, AxiosRequestConfig, AxiosResponse } from "axios";

export const userSignup = (
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  navigation: any
) => (dispatch: any) => {
  const data = {
    email: email,
    password: password,
    firstName: firstName,
    lastName: lastName,
  };
  console.log("userData", data);
  axios
    .post(SIGN_IN_USER, data)
    .then((res) => {
      console.log(res);
      navigation.replace("Home");
    })
    .catch((err) => console.log("error", err));
};

export const userLogin = (email: string, password: string, navigation: any) => (
  dispatch: any
) => {
  const base64 = require("base-64");
  const hash = "Basic " + base64.encode("karthik:karthik");
  let data = new FormData();
  data.append("username", email);
  data.append("password", password);
  data.append("grant_type", "password");
  let config: AxiosRequestConfig = {
    method: "post",
    url: LOGIN_USER_TOKEN,
    headers: {
      Authorization: hash,
    },
    data: data,
  };

  axios(config)
    .then((res: AxiosResponse) => console.log("responseServer", res.data))
    .catch((err) => console.log("errorResponse", err));
};
