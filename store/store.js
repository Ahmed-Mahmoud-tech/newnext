"use client";
import { configureStore } from "@reduxjs/toolkit";
import styleReducer from "./slices/style";
import userReducer from "./slices/user";
import videoResultReducer from "./slices/videoResult";

export const store = configureStore({
  reducer: {
    user: userReducer,
    style: styleReducer,
    videoResult: videoResultReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: styleReducer,
      },
      serializableCheck: false,
    }),
});
