import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginSlice";
import modalWindowReducer from "./modalWindowSlice";
import userInfoReducer from "./userInfoSlice";
import requestValueReducer from "./requestSlice";
import resultValueReducer from "./resultSlice";

const store = configureStore({
  reducer: {
    login: loginReducer,
    modalWindow: modalWindowReducer,
    user: userInfoReducer,
    requestValue: requestValueReducer,
    resultValue: resultValueReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
