import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../../api/axios";
import { initialState } from "./initial";

export const fetchLandingPage = createAsyncThunk("strapi/fetchLandingPage", async () => {
  try {
    const res = await fetchData("cms", "landing-page");
    return res;
  } catch (error) {
    console.error("error fetching landing page : ", error);
  }
});

export const fetchAboutUsPage = createAsyncThunk("strapi/fetchAboutUsPage", async () => {
  try {
    const res = await fetchData("cms", "about-us-page");
    return res;
  } catch (error) {
    console.error("error fetching about us page : ", error);
  }
});

export const fetchServicesPage = createAsyncThunk("strapi/fetchServicesPage", async () => {
  try {
    const res = await fetchData("cms", "service-page");
    return res;
  } catch (error) {
    console.error("error fetching services page : ", error);
  }
});

export const fetchTeamPage = createAsyncThunk("strapi/fetchTeamPage", async () => {
  try {
    const res = await fetchData("cms", "team-page");
    return res;
  } catch (error) {
    console.error("error fetching team page : ", error);
  }
});

export const fetchHeader = createAsyncThunk("strapi/fetchHeader", async () => {
  try {
    const res = await fetchData("cms", "navbar");
    return res;
  } catch (error) {
    console.error("error fetching header : ", error);
  }
});

export const fetchFooter = createAsyncThunk("strapi/fetchFooter", async () => {
  try {
    const res = await fetchData("cms", "footer");
    return res;
  } catch (error) {
    console.error("error fetching footer : ", error);
  }
});

export const fetchHostingPage = createAsyncThunk("strapi/fetchHostingPage", async () => {
  try {
    // TODO: api/hosting-page wont respond
    const url = `hosting-page?populate=clientFeedbackSection.feedbackCard.image,recommendationSection.companyLogo.logo,recommendationSection.companyIcon.logo,whyChooseUsSection.whyChooseUsCard.icon`;
    const res = await fetchData("cms", url);
    return res;
  } catch (error) {
    console.error("error fetching hosting page: ", error);
  }
});

export const fetchDomainPage = createAsyncThunk("strapi/fetchDomainPage", async () => {
  try {
    // TODO: api/domain-page wont respond
    const url = `domain-page?populate=popularDomainSection.popularDomainCard.logo`;
    const res = await fetchData("cms", url);
    return res;
  } catch (error) {
    console.error("error fetching domain page: ", error);
  }
});

export const fetchTemplates = createAsyncThunk("strapi/fetchTemplates", async () => {
  try {
    const res = await fetchData("cms", "templates");
    return res;
  } catch (error) {
    console.error("error fetching templates : ", error);
  }
});

export const strapiSlice = createSlice({
  name: "strapi",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHeader.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchHeader.fulfilled, (state, action) => {
        state.loading = false;
        state.header = action.payload;
      })
      .addCase(fetchHeader.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchFooter.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFooter.fulfilled, (state, action) => {
        state.loading = false;
        state.footer = action.payload;
      })
      .addCase(fetchFooter.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchLandingPage.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLandingPage.fulfilled, (state, action) => {
        state.loading = false;
        state.landingPage = action.payload;
      })
      .addCase(fetchLandingPage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchAboutUsPage.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAboutUsPage.fulfilled, (state, action) => {
        state.loading = false;
        state.aboutUsPage = action.payload;
      })
      .addCase(fetchAboutUsPage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchServicesPage.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchServicesPage.fulfilled, (state, action) => {
        state.loading = false;
        state.servicesPage = action.payload;
      })
      .addCase(fetchServicesPage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchTeamPage.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTeamPage.fulfilled, (state, action) => {
        state.loading = false;
        state.teamPage = action.payload;
      })
      .addCase(fetchTeamPage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchDomainPage.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDomainPage.fulfilled, (state, action) => {
        state.loading = false;
        state.domainPage = action.payload;
      })
      .addCase(fetchDomainPage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchTemplates.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.loading = false;
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default strapiSlice.reducer;
