import { createSlice } from '@reduxjs/toolkit';

const initialState = { requestValue: '' };

const requestSlice = createSlice({
  name: 'requestValue',
  initialState,
  reducers: {
    addRequest: (state, action: { payload: string }) => {
      state.requestValue = action.payload;
    },
    clearRequest: (state) => {
      state.requestValue = '';
    },
  },
});

export const { addRequest } = requestSlice.actions;
export default requestSlice.reducer;
