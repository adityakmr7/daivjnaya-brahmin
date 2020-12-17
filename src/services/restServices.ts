import axios, { AxiosRequestConfig } from "axios";
import AsyncStorage from "@react-native-community/async-storage";
// import { AsyncStorage } from "react-native";
class restServices {
  baseUrl = "http://3.6.104.144";

  get = async (url: string) => {
    let config: AxiosRequestConfig = {
      method: "get",
      timeout: 15000,
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
      timeout: 15000,
      url: this.baseUrl + url,
      headers: {
        Authorization: "Bearer " + (await this.getAccessToken()),
        "Content-Type": "application/json",
      },
      data: data,
    };
    return axios(config);
  };

  postWithNoData = async (url: string) => {
    let config: AxiosRequestConfig = {
      method: "post",
      timeout: 15000,
      url: this.baseUrl + url,
      headers: {
        Authorization: "Bearer " + (await this.getAccessToken()),
        "Content-Type": "application/json",
      },
    };
    return axios(config);
  };

  put = async (url: string, data: any) => {
    let config: AxiosRequestConfig = {
      method: "put",
      timeout: 15000,
      url: this.baseUrl + url,
      headers: {
        Authorization: "Bearer " + (await this.getAccessToken()),
      },
    };
    return axios(config);
  };

  delete = async (url: string) => {
    let config: AxiosRequestConfig = {
      method: "delete",
      timeout: 15000,
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
    } catch (e) {
      console.log(e);
    }
  };
  getToken = async () => {
    try {
      let userData: any = await AsyncStorage.getItem("userData");
      let data: any = JSON.parse(userData);

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
  getExpireTime = async () => {
    try {
      let userData: any = await AsyncStorage.getItem("userData");
      let data: any = JSON.parse(userData);

      return data["expires_in"];
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
  getMediaUrl = async (source: string) => {
    const mime = require("mime");
    var data = new FormData();
    const newImageUri = "file:///" + source.split("file:/").join("");
    data.append("file", {
      uri: newImageUri,
      type: mime.getType(newImageUri),
      name: newImageUri.split("/").pop(),
    });
    const token = await this.getAccessToken();
    var config: AxiosRequestConfig = {
      method: "post",
      url: `${this.baseUrl}/post/media`,
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "multipart/form-data",
      },
      data: data,
    };
    return axios(config);
  };
  getPdfUrl = async (source: {
    uri: string | Blob | any;
    name: string;
    type: "string";
  }) => {
    var data = new FormData();
    data.append("file", {
      uri: source.uri,
      type: "application/pdf",
      name: source.name,
    });
    const token = await this.getAccessToken();
    var config: AxiosRequestConfig = {
      method: "post",
      url: `${this.baseUrl}/post/media`,
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "multipart/form-data",
      },
      data: data,
    };
    return axios(config);
  };
}

export default restServices;
