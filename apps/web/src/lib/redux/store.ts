import { configureStore } from "@reduxjs/toolkit";
import strapiReducer, { fetchAboutUsPage, fetchDomainPage, fetchFooter, fetchHeader, fetchLandingPage, fetchServicesPage, fetchTeamPage, fetchTemplates } from "./strapi.slice";

const store = configureStore({
  reducer: {
    strapi: strapiReducer,
  },
});

store.dispatch(fetchHeader());
store.dispatch(fetchFooter());
store.dispatch(fetchLandingPage());
store.dispatch(fetchAboutUsPage());
store.dispatch(fetchServicesPage());
store.dispatch(fetchTeamPage());
store.dispatch(fetchDomainPage());
store.dispatch(fetchTemplates());

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
