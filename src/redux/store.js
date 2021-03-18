import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";

import userReducer from "./ducks/user";
import cartReducer from "./ducks/cart";
import directoryReducer from "./ducks/directory";
import shopReducer from "./ducks/shop";

const middlewares = [];

if (process.env.NODE_ENV === "development") middlewares.push(logger);

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  applyMiddleware(...middlewares)
);

export const persistor = persistStore(store);

export default store;
