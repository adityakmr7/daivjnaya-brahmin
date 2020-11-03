import axios, { AxiosRequestConfig } from "axios";
// import AsyncStorage from "@react-native-community/async-storage";
import { AsyncStorage } from "react-native";
class restServices {
  baseUrl = "http://3.128.109.207";

  get = async (url: string) => {
    let config: AxiosRequestConfig = {
      method: "get",
      url: this.baseUrl + url,
      headers: {
        Authorization: "Bearer " + (await this.getAccessToken()),
      },
    };
    return axios(config);
  };

  post = async (url: string, data: {}) => {
    let config: AxiosRequestConfig = {
      method: "post",
      url: this.baseUrl + url,
      headers: {
        Authorization: "Bearer " + (await this.getAccessToken()),
      },
      data: data,
    };
    return axios(config);
  };

  put = async (url: string, data: any) => {
    let config: AxiosRequestConfig = {
      method: "put",
      url: this.baseUrl + url,
      headers: {
        Authorization: "Bearer " + (await this.getAccessToken()),
      },
    };
    return axios(config);
  };

  saveToken = async (value: {}) => {
    try {
      await AsyncStorage.setItem("userData", JSON.stringify(value));
      console.log("saveToken Triggered");
    } catch (e) {
      console.log(e);
    }
  };
  getToken = async () => {
    try {
      let userData: any = await AsyncStorage.getItem("userData");
      let data: any = JSON.parse(userData);
      console.log("getToken", data);
      return data;
    } catch (e) {
      console.log(e);
    }
  };
  getRefreshToken = async () => {
    try {
      let userData: any = await AsyncStorage.getItem("userData");
      let data: any = JSON.parse(userData);
      return data["refresh_token"];
    } catch (e) {
      console.log(e);
    }
  };
  getAccessToken = async () => {
    try {
      let userData: any = await AsyncStorage.getItem("userData");
      let data: any = JSON.parse(userData);

      return data["access_token"];
    } catch (e) {
      console.log(e);
    }
  };
  removeAccessToken = async () => {
    try {
      await AsyncStorage.removeItem("userData");
    } catch (e) {
      console.log(e);
    }
  };
}

export default restServices;
