import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { request, RequestParamsType } from '../../requests/api';

export const fetchResult = createAsyncThunk<string, RequestParamsType>(
  'result',
  async (params: RequestParamsType) => {
    const response = await request(params);
    return response;
  }
);

type InitialStateType = {
  result: string;
  status: 'idle' | 'pending' | 'succeeded' | 'failed';
};

const initialState: InitialStateType = {
  result: '',
  status: 'idle',
};

const requestSlice = createSlice({
  name: 'requestValue',
  initialState,
  reducers: {
    updateStatusRequest: (state) => {
      state.status = 'idle';
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchResult.fulfilled, (state, action) => {
      state.result = JSON.stringify(action.payload, null, 2);
      state.status = 'succeeded';
    });
    builder.addCase(fetchResult.rejected, (state) => {
      state.status = 'failed';
    });
    builder.addCase(fetchResult.pending, (state) => {
      state.status = 'pending';
    });
  },
});

export const { updateStatusRequest } = requestSlice.actions;
export default requestSlice.reducer;
