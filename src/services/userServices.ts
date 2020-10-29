import AsyncStorage from "@react-native-community/async-storage";
class UserServices {
  getOauth2 = () => {
    let ClientOAuth2 = require("client-oauth2");
    const OAuth2 = new ClientOAuth2({
      clientId: "development",
      clientSecret: "development",
      accessTokenUri: "",
      authorizationUri: "",
      redirectUri: "",
      scopes: ["read", "write", "trust"],
    });

    return OAuth2;
  };

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

export default UserServices;
