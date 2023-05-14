import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../store/slices/loginSlice';
import modalWindowReducer from '../store/slices/modalWindowSlice';
import userInfoReducer from '../store/slices/userInfoSlice';
import requestValueReducer from './slices/requestSlice';
import variablesReducer from './slices/variablesSlice';
import resultReducer from './slices/resultSlice';
import userReducer from './slices/userSlice';

const store = configureStore({
  reducer: {
    login: loginReducer,
    modalWindow: modalWindowReducer,
    userLang: userInfoReducer,
    requestValue: requestValueReducer,
    variablesValue: variablesReducer,
    resultValue: resultReducer,
    user: userReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
