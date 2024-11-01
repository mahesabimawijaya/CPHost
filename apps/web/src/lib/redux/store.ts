import { configureStore } from "@reduxjs/toolkit";
import strapiReducer, { fetchDomainPage, fetchFooter, fetchHeader, fetchLandingPage } from "./strapi.slice";

const store = configureStore({
  reducer: {
    strapi: strapiReducer,
  },
});

store.dispatch(fetchHeader());
store.dispatch(fetchFooter());
store.dispatch(fetchLandingPage());
store.dispatch(fetchDomainPage());

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
