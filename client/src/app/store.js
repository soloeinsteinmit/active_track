// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import userVitalsReducer from "../features/user/userVitals";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import messageReducer from "../features/ai/messageSlice";
import aiChatReducer from "../features/ai/AiSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  user: userReducer,
  userVitals: userVitalsReducer,
  message: messageReducer,
  chat: aiChatReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export default store;
