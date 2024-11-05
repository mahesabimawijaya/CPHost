import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { initialUser } from "./initial";
import { User } from "../../types/User";

export const userSlice = createSlice({
  name: "auth",
  initialState: initialUser as User | null,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      return { ...state, ...action.payload };
    },
    updateProfile: (state, action: PayloadAction<Partial<User>>) => {
      if (state) {
        return { ...state, ...action.payload };
      }
      return state;
    },
    logout: () => {
      Cookies.remove("access_token");
      Cookies.remove("refresh_token");
      return initialUser;
    },
  },
});

export const { login, updateProfile, logout } = userSlice.actions;
export default userSlice.reducer;
