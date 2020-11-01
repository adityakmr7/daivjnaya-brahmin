import { ThemeProvider } from "@shopify/restyle";
import React from "react";
import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { LoadAssets, theme } from "./src/components";
import AppNavigation from "./src/Screens";
import { B2BAssets } from "./src/Screens/B2B";
import { assetsKarwar } from "./src/Screens/communityHub/Karwar";
import { headerAssets, iconAssets } from "./src/Screens/HomeScreen";
import { assetShop } from "./src/Screens/Jewellery/Shop";
import { assetsVendor } from "./src/Screens/Jewellery/Vendors";
import { assetsWorker } from "./src/Screens/Jewellery/Workers";
import { NotificationAssets } from "./src/Screens/Notifications";

import { store } from "./src/store";
import { logoutUser, userAuthorized } from "./src/actions/authActions";
import restServices from "./src/services/restServices";
import axios, { AxiosRequestConfig } from "axios";
const assets = [
  ...headerAssets,
  ...iconAssets,
  ...assetsKarwar,
  ...assetsVendor,
  ...assetShop,
  ...assetsWorker,
  ...NotificationAssets,
  ...B2BAssets,
];
const fonts = {
  Saman: require("./assets/fonts/Samarkan.ttf"),
  SFProTextBold: require("./assets/fonts/SF-Pro-Text-Bold.otf"),
  SFProTextRegular: require("./assets/fonts/SF-Pro-Text-Regular.otf"),
  SFProTextSemiBold: require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
};

/**
 * check if accessToken is available already
 * if available then @isAuthenticated
 * else !@isAuthenticated
 */

function lookForToken() {
  const _res = new restServices();
  _res
    .getToken()
    .then((res) => {
      console.log("tokenToken", res);
      if (res.access_token) {
        store.dispatch<any>(userAuthorized());
      } else {
        store.dispatch<any>(logoutUser());
      }
    })
    .catch((err) => {
      store.dispatch<any>(logoutUser());
    });
}
lookForToken();

/**
 *  For refresh token This function
 */

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      console.log("token expired");
      const _rest = new restServices();
      _rest
        .getRefreshToken()
        .then((res) => {
          console.log("interceptor", res);
          let data = new FormData();
          data.append("grant_type", "refresh_token");
          data.append("refresh_token", res.refresh_token);
          const base64 = require("base-64");
          const hash = "Basic " + base64.encode("karthik:karthik");

          let config: AxiosRequestConfig = {
            method: "post",
            url: "http://3.128.29.232/oauth/token",
            headers: {
              Authorization: hash,
            },
            data: data,
          };
          axios(config)
            .then((res) => {
              console.log("interceptorlog", res.data);
            })
            .catch((err) => {
              console.log("interceptorlog", err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      // Do Something here
    }
  }
);

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider {...{ theme }}>
        <LoadAssets {...{ fonts, assets }}>
          <SafeAreaProvider>
            <AppNavigation />
          </SafeAreaProvider>
        </LoadAssets>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
