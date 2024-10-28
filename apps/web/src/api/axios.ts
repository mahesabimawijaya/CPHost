import axios from "axios";

const getBaseUrl = (baseUrlType: "cms" | "api") => {
  if (baseUrlType === "cms") {
    return import.meta.env.VITE_BASE_CMS_URL;
  } else if (baseUrlType === "api") {
    return import.meta.env.VITE_BASE_API_URL;
  }
  throw new Error("Invalid base URL type");
};

const token = import.meta.env.VITE_CMS_KEY;

export const createAxiosInstance = (baseUrlType: "cms" | "api") => {
  const baseURL = getBaseUrl(baseUrlType);
  return axios.create({
    baseURL,
    withCredentials: true,
  });
};

//create
export const createData = async (baseUrlType: "cms" | "api", endpoint: string, data: unknown, contentType: string) => {
  try {
    const api = createAxiosInstance(baseUrlType);
    const response = await api.post(endpoint, data, {
      headers: {
        "Content-Type": contentType,
        Authorization: "Bearer " + token,
      },
    });
    return response;
  } catch (error) {
    console.error("Error creating data:", error);
    throw error;
  }
};

//read
export const fetchData = async (baseUrlType: "cms" | "api", endpoint: string) => {
  try {
    const api = createAxiosInstance(baseUrlType);
    const response = await api.get(endpoint, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

//update
export const updateData = async (baseUrlType: "cms" | "api", endpoint: string, data: unknown, contentType: string) => {
  try {
    const api = createAxiosInstance(baseUrlType);
    const response = await api.patch(endpoint, data, {
      headers: {
        "Content-Type": contentType,
        Authorization: "Bearer " + token,
      },
    });
    return response;
  } catch (error) {
    console.error("Error updating data:", error);
    throw error;
  }
};

//archive
export const archiveData = async (baseUrlType: "cms" | "api", endpoint: string) => {
  try {
    const api = createAxiosInstance(baseUrlType);
    const response = await api.put(endpoint, {
      archived: true,
    });
    return response;
  } catch (error) {
    console.error("Error archiving data:", error);
    throw error;
  }
};

//delete
export const deleteData = async (baseUrlType: "cms" | "api", endpoint: string) => {
  try {
    const api = createAxiosInstance(baseUrlType);
    const response = await api.delete(endpoint);
    return response;
  } catch (error) {
    console.error("Error deleting data:", error);
    throw error;
  }
};
