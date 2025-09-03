import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CustomizerReducer from "./slice/customizer/CustomizerSlice";
import AppReducer from "./slice/app/AppSlice";
import UserReducer from "./slice/user/userSlice";

import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

// configration of persist storage
const persistConfig = {
  key: "root",
  storage: storage,
  timeout: 5000,
};

// combine all slice into single reducer
const rootReducer = combineReducers({
  customizer: CustomizerReducer,
  appInfo: AppReducer,
  user: UserReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});
export const persistor = persistStore(store);

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
