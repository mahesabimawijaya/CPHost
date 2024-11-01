import axios from "axios";

export const fetchDomain = async (domain: string) => {
  try {
    const { data } = await axios.get(import.meta.env.VITE_BASE_DOMAIN_URL, {
      params: { domain, api_key: import.meta.env.VITE_DOMAIN_API_KEY },
    });
    return data;
  } catch (error) {
    console.error("error fetching header : ", error);
  }
};
