import AsyncStorage from "@react-native-community/async-storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import authReducer from "./authReducer";
import friendReducer from "./friendReducer";
import hubReducer from "./hubReducer";
import matrimonyReducer from "./matrimonyReducer";
import postReducer from "./postReducer";
import userReducer from "./userReducer";

export default combineReducers({
  auth: authReducer,
  profile: userReducer,
  matrimony: matrimonyReducer,
  post: postReducer,
  friend: friendReducer,
  hub: hubReducer,
});
