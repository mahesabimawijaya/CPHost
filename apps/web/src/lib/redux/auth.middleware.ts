import { Dispatch } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import * as CryptoJS from "crypto-js";
import { UserLoginPayload } from "../../types/User";
import { login } from "./user.slice";
import { Buffer } from "buffer";
import axios from "axios";
import Swal from "sweetalert2";

const SECRET_KEY =
  import.meta.env.VITE_SECRET_KEY || "your-fallback-secret-key";

function decryptData(encryptedData: string, secretKey: string): string {
  try {
    const decodedData = Buffer.from(encryptedData, "base64").toString("binary");

    // decrypt the data using CryptoJS
    const bytes = CryptoJS.AES.decrypt(decodedData, secretKey);

    // convert bytes to UTF-8 string
    const decryptedText = bytes.toString(CryptoJS.enc.Utf8);
    if (!decryptedText) {
      console.log("Decryption failed");
    }
    return decryptedText;
  } catch (error) {
    console.error("Decryption error:", error);
    throw new Error("Decrypt error");
  }
}

export const userLogin = ({ email, password }: UserLoginPayload) => {
  return async (dispatch: Dispatch) => {
    try {
      console.log("attempt login");

      const response = await axios.post(
        "http://localhost:8000/users/v2",
        {
          email,
          password,
        },
        { withCredentials: true }
      );

      if (response.data.success) {
        const cookies = document.cookie;
        console.log("log document cookies:", cookies);

        const access_token = Cookies.get("access_token");
        console.log("access_token:", access_token);

        if (access_token) {
          const decodedToken = jwtDecode<any>(access_token);

          // hasil decode, tapi userInfo masih encrypted
          const encryptedUserInfo = decodedToken.data;

          // decrypt
          const decryptedUserInfo = decryptData(encryptedUserInfo, SECRET_KEY);

          // parsing user data
          const user = JSON.parse(decryptedUserInfo);

          dispatch(login(user));
        }
        return { message: "success login" };
      } else {
        Swal.fire({
          icon: "error",
          title: "Login failed",
          text: response.data.message || "An unexpected error occurred.",
          confirmButtonText: "Try Again",
        });
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        const errorMessage =
          err.response?.data.message || "An unexpected error occurred.";

        Swal.fire({
          icon: "error",
          title: "Login error",
          text: errorMessage,
          confirmButtonText: "Try again",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Unexpected error",
          text: "An unexpected error occurred.",
          confirmButtonText: "Try again",
        });
      }
    }
  };
};

export const keepLogin = () => {
  return async (dispatch: Dispatch) => {
    try {
      const token = Cookies.get("access_token");

      if (token) {
        const decodedToken = jwtDecode<any>(token);

        // hasil decode jwt, userInfo masih encrypted
        const encryptedUserInfo = decodedToken.data;

        const decryptedUserInfo = decryptData(encryptedUserInfo, SECRET_KEY);

        const user = JSON.parse(decryptedUserInfo);

        dispatch(login(user));
      }
    } catch (error) {
      console.error("Keep login error:", error);
      Cookies.remove("access_token");
      throw error;
    }
  };
};
