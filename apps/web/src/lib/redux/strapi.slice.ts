import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../../api/axios";
import { initialState } from "./initial";

export const fetchLandingPage = createAsyncThunk(
  "strapi/fetchLandingPage",
  async () => {
    try {
      const res = await fetchData("cms", "landing-page");
      return res;
    } catch (error) {
      console.error("error fetching landing page : ", error);
    }
  }
);

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

export const fetchHostingPage = createAsyncThunk(
  "strapi/fetchHostingPage",
  async () => {
    try {
      const res = await fetchData("cms", "hosting-page");
      return res;
    } catch (error) {
      console.error("error fetching hosting page: ", error);
    }
  }
);

export const fetchDomainPage = createAsyncThunk(
  "strapi/fetchDomainPage",
  async () => {
    try {
      // TODO: api/domain-page wont respond
      const url = `domain-page?populate=popularDomainSection.popularDomainCard.logo`;
      const res = await fetchData("cms", url);
      return res;
    } catch (error) {
      console.error("error fetching domain page: ", error);
    }
  }
);

export const fetchContactUsPage = createAsyncThunk(
  "strapi/fetchContactUsPage",
  async () => {
    try {
      const res = await fetchData("cms", "contact-us-page");
      return res;
    } catch (error) {
      console.error("error fetching contact us page: ", error);
    }
  }
);

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
      .addCase(fetchHostingPage.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchHostingPage.fulfilled, (state, action) => {
        state.loading = false;
        state.hostingPage = action.payload;
      })
      .addCase(fetchHostingPage.rejected, (state, action) => {
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
      .addCase(fetchContactUsPage.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchContactUsPage.fulfilled, (state, action) => {
        state.loading = false;
        state.contactUsPage = action.payload;
      })
      .addCase(fetchContactUsPage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default strapiSlice.reducer;
