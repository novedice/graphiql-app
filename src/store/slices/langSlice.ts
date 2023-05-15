import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../types';

const initialState = {
  name: '',
  lang: localStorage.getItem('currentLanguage') ? localStorage.getItem('currentLanguage') : 'en',
} as IUser;

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    changeLang: (state) => {
      state.lang === 'en' ? (state.lang = 'rus') : (state.lang = 'en');
    },
    changeToEn: (state) => {
      state.lang = 'en';
    },
    changeToRu: (state) => {
      state.lang = 'rus';
    },
  },
});

export const { changeLang, changeToEn, changeToRu } = userInfoSlice.actions;
export default userInfoSlice.reducer;
