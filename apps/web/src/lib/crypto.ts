import * as CryptoJS from "crypto-js";
import Cookies from "js-cookie";

const decryptToken = (encryptedToken: string, secretKey: string) => {
  const bytes = CryptoJS.AES.decrypt(encryptedToken, secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
};

// example usage to get encrypted token from cookies
const encryptedToken = Cookies.get("access_token");

// to decrypt
const secretKey = import.meta.env.VITE_SECRET_KEY;
if (encryptedToken) {
  const decryptedToken = decryptToken(encryptedToken, secretKey);
  console.log("Decrypted Token:", decryptedToken);
}
