import { configureStore } from "@reduxjs/toolkit";
import { spaceXApi } from "../services/spaceX";
import { setupListeners } from "@reduxjs/toolkit/query";
import favouritesReducer from "./slices/favouritesSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, favouritesReducer);

export const store = configureStore({
  reducer: {
    [spaceXApi.reducerPath]: spaceXApi.reducer,
    favourites: persistedReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ serializableCheck: false }).concat(
      spaceXApi.middleware
    );
  },
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type StoreType = typeof store;
export type RootState = ReturnType<typeof store.getState>;
