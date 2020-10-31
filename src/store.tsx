import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { devToolsEnhancer } from "redux-devtools-extension";

export const store = createStore(rootReducer, applyMiddleware(thunk));
