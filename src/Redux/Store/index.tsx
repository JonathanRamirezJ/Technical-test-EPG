import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

// Own reducers
import { themeSlice } from "../Theme";
import { languageSlice } from "../Translate";
import {GetChannelsSlice} from "../GetChannels/GetChannels.slice";

const rootReducer = combineReducers({
  [languageSlice.name]: languageSlice.reducer,
  [themeSlice.name]: themeSlice.reducer,
  [GetChannelsSlice.name]: GetChannelsSlice.reducer
});

const persistConfig = {
  key: "PruebaTecnicaClaroVideo",
  storage,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
