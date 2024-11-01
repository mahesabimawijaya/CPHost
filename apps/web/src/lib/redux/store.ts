import { configureStore } from "@reduxjs/toolkit";
import strapiReducer from "./strapi.slice";

const store = configureStore({
  reducer: {
    strapi: strapiReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
