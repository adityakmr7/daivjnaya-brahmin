import axios from "axios";
// import AsyncStorage from "@react-native-community/async-storage";
import { AsyncStorage } from "react-native";
class restServices {
  baseUrl = "http://3.128.29.232";

  get(url: string) {
    axios
      .get(this.baseUrl + url)
      .then((res) => res)
      .catch((err) => console.log(err));
  }

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
      console.log("getToken", data);
      return data;
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
