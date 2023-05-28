import { configureStore } from '@reduxjs/toolkit';
import requestValueReducer from './slices/requestSlice';
import variablesValueReducer from './slices/variablesSlice';
import loginReducer from './slices/loginSlice';
import modalWindowReducer from './slices/modalWindowSlice';
import langReducer from './slices/langSlice';
import userReducer from './slices/userSlice';
import variableViewReducer from './slices/variableViewSlice';
import docSchemaReducer from './slices/docSlice';

const store = configureStore({
  reducer: {
    login: loginReducer,
    modalWindow: modalWindowReducer,
    requestValue: requestValueReducer,
    variablesValue: variablesValueReducer,
    userLang: langReducer,
    user: userReducer,
    variableView: variableViewReducer,
    docSchema: docSchemaReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
