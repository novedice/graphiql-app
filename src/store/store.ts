import { configureStore } from '@reduxjs/toolkit';
import requestValueReducer from './slices/requestSlice';
import variablesValueReducer from './slices/variablesSlice';
import resultValueReducer from './slices/resultSlice';
import loginReducer from './slices/loginSlice';
import modalWindowReducer from './slices/modalWindowSlice';
import langReducer from './slices/langSlice';
import userReducer from './slices/userSlice';
import variableViewReducer from './slices/variableViewSlice';

const store = configureStore({
  reducer: {
    login: loginReducer,
    modalWindow: modalWindowReducer,
    requestValue: requestValueReducer,
    variablesValue: variablesValueReducer,
    resultValue: resultValueReducer,
    userLang: langReducer,
    user: userReducer,
    variableView: variableViewReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
