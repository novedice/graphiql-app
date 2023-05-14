import { createSlice } from '@reduxjs/toolkit';

const initialState = { variables: '', headers: '' };

const variablesSlice = createSlice({
  name: 'variablesValue',
  initialState,
  reducers: {
    updateVariablesValue: (state, action: { payload: string }) => {
      state.variables = action.payload;
    },
    updateHeadersValue: (state, action: { payload: string }) => {
      state.headers = action.payload;
    },
  },
});

export const { updateVariablesValue, updateHeadersValue } = variablesSlice.actions;
export default variablesSlice.reducer;
