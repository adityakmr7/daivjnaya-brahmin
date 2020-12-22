import { ThemeProvider } from "@shopify/restyle";
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { LoadAssets, theme } from "./src/components";
import AppNavigation from "./src/Screens";
import { NotificationAssets } from "./src/Screens/Notifications";
import { ThemeProvider as StyleThemeProvider } from "styled-components";
import { ToastProvider } from "react-native-styled-toast";
import { store } from "./src/store";
import axios from "axios";
import { logoutUser, userAuthorized } from "./src/actions/authActions";
import restServices from "./src/services/restServices";
import { BackdropProvider } from "react-native-propel-kit";
import { YellowBox } from "react-native";
import Notification from "./src/Notification/Notification";
import { iconAssets } from "./src/Screens/HomeScreen";

YellowBox.ignoreWarnings(["VirtualizedLists should never be nested"]);

const assets = [...iconAssets, ...NotificationAssets];
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

// axios.interceptors.request.use(async (config: AxiosRequestConfig) => {
//   const _rest = new restServices();
//   const expireAt = await _rest.getExpireTime();
//   console.log("interceptorRequest", expireAt);
//   return config;
// });

axios.interceptors.response.use(
  (response) => {
    if (response.status === 401) {
      store.dispatch(logoutUser());
    }
    return response;
  },
  async (error) => {
    if (error.response.status !== 401) {
      return Promise.reject(error);
    }
    if (error.response && error.response.status === 401) {
      makeRefreshTokenCall();
    }
  }
);

async function makeRefreshTokenCall() {
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
  fetch("http://3.6.104.144/oauth/token", requestOptions)
    .then((res) => res.json())
    .then((result) => {
      if (result.error) {
        store.dispatch(logoutUser());
      } else {
        console.log("interceptor", result);
        _rest.saveToken(result.data);
      }
    })
    .catch((error) => {
      store.dispatch(logoutUser());
    });
}

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
      <ThemeProvider {...{ theme }}>
        <LoadAssets {...{ fonts, assets }}>
          <BackdropProvider>
            <SafeAreaProvider>
              <StyleThemeProvider theme={toastTheme}>
                <ToastProvider offset={20}>
                  <AppNavigation />
                </ToastProvider>
              </StyleThemeProvider>
            </SafeAreaProvider>
          </BackdropProvider>
        </LoadAssets>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
