import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './loginSlice';
import modalWindowReducer from './modalWindowSlice';
import userInfoReducer from './userInfoSlice';

const store = configureStore({
  reducer: {
    login: loginReducer,
    modalWindow: modalWindowReducer,
    userLang: userInfoReducer,
    requestValue: requestValueReducer,
    variablesValue: variablesValueReducer,
    resultValue: resultValueReducer,
    user: userReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
