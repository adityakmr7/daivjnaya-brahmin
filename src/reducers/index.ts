import { combineReducers } from "redux";
import authReducer from "./authReducer";
import matrimonyReducer from "./matrimonyReducer";
import postReducer from "./postReducer";
import userReducer from "./userReducer";

export default combineReducers({
  auth: authReducer,
  profile: userReducer,
  matrimony: matrimonyReducer,
  post: postReducer,
});
