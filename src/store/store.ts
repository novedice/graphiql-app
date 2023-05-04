import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './slices/loginSlice';
import modalWindowReducer from './slices/modalWindowSlice';
import userInfoReducer from './slices/userInfoSlice';
import userReducer from './slices/userSlice';

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
