import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import AsyncStorage from "@react-native-community/async-storage";
import { persistReducer, persistStore } from "redux-persist";

const middleware = [thunk, logger];

// const persistConfig = {
//   key: "root",
//   storage: AsyncStorage,
// };
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// let store = createStore(
//   persistedReducer,
//   composeWithDevTools(applyMiddleware(...middleware))
// );
// let persistor = persistStore(store);
// export { store, persistor };

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
