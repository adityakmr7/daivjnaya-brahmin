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
import { ThemeProvider as StyleThemeProvider } from "styled-components";
import { ToastProvider } from "react-native-styled-toast";
import { store, persistor } from "./src/store";
import { logoutUser, userAuthorized } from "./src/actions/authActions";
import restServices from "./src/services/restServices";
import axios, { AxiosRequestConfig } from "axios";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
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
    console.log("interceptRes", response);

    return response;
  },
  async (error) => {
    if (error.response.status !== 401) {
      return Promise.reject(error);
    }
    if (
      (error.response && error.response.status === 401) ||
      error.response.status === 500
    ) {
      console.log("token expired");

      const _rest = new restServices();
      const base64 = require("base-64");
      const hash = "Basic " + base64.encode("karthik:karthik");
      let myHeaders = new Headers();
      myHeaders.append("Authorization", hash);

      let data = new FormData();
      data.append("grant_type", "refresh_token");
      data.append("refresh_token", await _rest.getRefreshToken());
      var requestOptions: any = {
        method: "POST",
        headers: myHeaders,
        body: data,
        redirect: "follow",
      };
      fetch("http://3.128.109.207/oauth/token", requestOptions)
        .then((res) => res.json())
        .then((result) => {
          if (result.error) {
            store.dispatch(logoutUser());
          } else {
            console.log("interceptor", result);
            _rest.saveToken(result.data);
          }
          // console.log("interceptor", result);
          // _rest.saveToken(result.data);
        })
        .catch((error) => {
          console.log("inter", error);
          store.dispatch(logoutUser());
        });
    }
  }
);

const toastTheme = {
  space: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48],
  colors: {
    main: "#D4AF37",
    text: "#0A0A0A",
    background: "#FFF",
    border: "#E2E8F0",
    muted: "#F0F1F3",
    success: "#7DBE31",
    error: "#F20000",
    info: "#6EAAF7",
  },
};

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider {...{ theme }}>
          <LoadAssets {...{ fonts, assets }}>
            <SafeAreaProvider>
              <StyleThemeProvider theme={toastTheme}>
                <ToastProvider offset={20}>
                  <AppNavigation />
                </ToastProvider>
              </StyleThemeProvider>
            </SafeAreaProvider>
          </LoadAssets>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
