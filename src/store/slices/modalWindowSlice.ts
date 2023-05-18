import { createSlice } from '@reduxjs/toolkit';

interface ModalWindowInterface {
  show: boolean;
  message: string;
}

const initialState = { show: false, message: '' } as ModalWindowInterface;

const modalWindowSlice = createSlice({
  name: 'modalWindow',
  initialState,
  reducers: {
    openModalWindow: (state, action: { payload: string }) => {
      state.show = true;
      state.message = action.payload;
    },
    closeModalWindow: (state) => {
      state.show = false;
      state.message = '';
    },
  },
});

export const { openModalWindow, closeModalWindow } = modalWindowSlice.actions;
export default modalWindowSlice.reducer;
