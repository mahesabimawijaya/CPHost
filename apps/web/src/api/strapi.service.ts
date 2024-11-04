import { createData, fetchData } from "./axios";

export const fetchHeader = async () => {
  try {
    const res = await fetchData("cms", "navbar");
    return res;
  } catch (error) {
    console.error("error fetching header : ", error);
  }
};

export const fetchPlanById = async (id: string | undefined) => {
  try {
    const res = await fetchData("cms", `plans/${id}`);
    return res;
  } catch (error) {
    console.error("error fetching header : ", error);
  }
};

export const fetchFooter = async () => {
  try {
    const res = await fetchData("cms", "footer");
    return res;
  } catch (error) {
    console.error("error fetching footer : ", error);
  }
};

export const fetchLandingPage = async () => {
  try {
    const res = await fetchData("cms", "landing-page");
    return res;
  } catch (error) {
    console.error("error fetching landing page : ", error);
  }
};

export const fetchHostingPage = async () => {
  try {
    // TODO: api/hosting-page wont respond
    const url = `hosting-page?populate=clientFeedbackSection.feedbackCard.image,recommendationSection.companyLogo.logo,recommendationSection.companyIcon.logo,whyChooseUsSection.whyChooseUsCard.icon`;
    const res = await fetchData("cms", url);
    return res;
  } catch (error) {
    console.error("error fetching hosting page: ", error);
  }
};

export const fetchDomainPage = async () => {
  try {
    // TODO: api/domain-page wont respond
    const url = `domain-page?populate=popularDomainSection.popularDomainCard.logo`;
    const res = await fetchData("cms", url);
    return res;
  } catch (error) {
    console.error("error fetching domain page: ", error);
  }
};

// export const checkout = async (payload: ) => {
//   try {
//     const res = await createData('cms', 'transaction', {

//     })
//     return res;
//   } catch (error) {
//     console.error("error fetching landing page : ", error);
//   }
// };
