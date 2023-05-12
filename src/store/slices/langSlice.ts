import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../types';

const initialState = { lang: 'en' } as IUser;

const langSlice = createSlice({
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

export const { changeLang, changeToEn, changeToRu } = langSlice.actions;
export default langSlice.reducer;
