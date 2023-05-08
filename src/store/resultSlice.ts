import { createSlice } from '@reduxjs/toolkit';

const initialState = { resultValue: '' };

const resultSlice = createSlice({
  name: 'resultValue',
  initialState,
  reducers: {
    addResults: (state, action: { payload: string }) => {
      state.resultValue = action.payload;
    },
    clearResults: (state) => {
      state.resultValue = '';
    },
  },
});

export const { addResults, clearResults } = resultSlice.actions;
export default resultSlice.reducer;
