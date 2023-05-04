import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface ModalWindowInterface {
  show: boolean;
}

const initialState = { show: false } as ModalWindowInterface;

const modalWindowSlice = createSlice({
  name: 'modalWindow',
  initialState,
  reducers: {
    openModalWindow:(state) => {
      state.show = true
    },
    closeModalWindow: (state) => {
      state.show = false
    },
  },
})

export const { openModalWindow, closeModalWindow } = modalWindowSlice.actions;
export default modalWindowSlice.reducer;