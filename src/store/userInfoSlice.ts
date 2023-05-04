import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../types";

const initialState = { name: "", lang: "en" } as IUser;

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    changeLang: (state) => {
      state.lang === "en" ? (state.lang = "rus") : (state.lang = "en");
    },
    changeName: (state, action: { payload: string }) => {
      state.name = action.payload;
    },
  },
});

export const { changeLang, changeName } = userInfoSlice.actions;
export default userInfoSlice.reducer;
