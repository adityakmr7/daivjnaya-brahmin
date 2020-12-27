import AsyncStorage from "@react-native-community/async-storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import authReducer from "./authReducer";
import b2bReducer from "./b2bReducer";
import bannerReducer from "./bannerReducer";
import careerReducer from "./careerReducer";
import friendReducer from "./friendReducer";
import hubReducer from "./hubReducer";
import jewelleryReducer from "./jewelleryReducer";
import matrimonyReducer from "./matrimonyReducer";
import newsReducer from "./newsReducer";
import notificationReducer from "./notificationReducer";
import postReducer from "./postReducer";
import userReducer from "./userReducer";

export default combineReducers({
  auth: authReducer,
  profile: userReducer,
  matrimony: matrimonyReducer,
  post: postReducer,
  friend: friendReducer,
  hub: hubReducer,
  news: newsReducer,
  banner: bannerReducer,
  career: careerReducer,
  b2b: b2bReducer,
  jewellery: jewelleryReducer,
  notification: notificationReducer,
});
