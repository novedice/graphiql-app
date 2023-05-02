import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface LoginInterface {
  loggedIn: boolean;
}

const initialState = { loggedIn: false } as LoginInterface;

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    logIn: (state) => {
      state.loggedIn = true
    },
    logOut: (state) => {
      state.loggedIn = false
    },
  },
})

export const { logIn, logOut } = loginSlice.actions;
export default loginSlice.reducer;