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

export type CheckoutParams = {
  templateId: number;
  planId: number;
  amount: number;
  endDate: Date;
  invoice: string;
  domain: string;
  firstName: string;
  lastName: string;
  email: string;
};

export const checkout = async ({ templateId, planId, amount, endDate, invoice, domain, firstName, lastName, email }: CheckoutParams): Promise<unknown> => {
  try {
    const res = await createData(
      "cms",
      "transaction",
      {
        data: {
          templateId,
          planId,
          amount,
          endDate,
          invoice,
          domain,
          user: {
            firstName,
            lastName,
            email,
          },
        },
      },
      "application/json"
    );
    return res;
  } catch (error) {
    console.error("error fetching landing page : ", error);
  }
};
