import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";

class restServices {
  baseUrl = "http://3.128.29.232";

  get(url: string) {
    axios
      .get(this.baseUrl + url)
      .then((res) => res)
      .catch((err) => console.log(err));
  }

  saveAccessToken = async (value: string) => {
    try {
      await AsyncStorage.setItem("@access_token", value);
    } catch (e) {
      console.log(e);
    }
  };
  getAccessToken = async () => {
    try {
      await AsyncStorage.getItem("@access_token");
    } catch (e) {
      console.log(e);
    }
  };
  removeAccessToken = async () => {
    try {
      await AsyncStorage.removeItem("@access_token");
    } catch (e) {
      console.log(e);
    }
  };
}

export default restServices;
