import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './loginSlice';
import modalWindowReducer from './modalWindowSlice';
import userInfoReducer from './userInfoSlice';

const store = configureStore({
  reducer: {
    login: loginReducer,
    modalWindow: modalWindowReducer,
    user: userInfoReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
