import { configureStore } from "@reduxjs/toolkit";
import strapiReducer, {
  fetchContactUsPage,
  fetchDomainPage,
  fetchFooter,
  fetchHeader,
  fetchHostingPage,
  fetchLandingPage,
} from "./strapi.slice";

const store = configureStore({
  reducer: {
    strapi: strapiReducer,
  },
});

store.dispatch(fetchHeader());
store.dispatch(fetchFooter());
store.dispatch(fetchLandingPage());
store.dispatch(fetchDomainPage());
store.dispatch(fetchHostingPage());
store.dispatch(fetchContactUsPage());

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
