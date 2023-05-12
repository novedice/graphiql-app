import { createSlice } from '@reduxjs/toolkit';

interface VariableViewInterface {
  varWindow: boolean;
  wholeWindow: boolean;
}

const initialState = {
  varWindow: true,
  wholeWindow: true,
} as VariableViewInterface;

const variableViewSlice = createSlice({
  name: 'variableView',
  initialState,
  reducers: {
    openVar: (state) => {
      state.varWindow = true;
    },
    closeVar: (state) => {
      state.varWindow = false;
    },
    changeWholeView: (state) => {
      state.wholeWindow = !state.wholeWindow;
    },
  },
});

export const { openVar, changeWholeView, closeVar } = variableViewSlice.actions;
export default variableViewSlice.reducer;
