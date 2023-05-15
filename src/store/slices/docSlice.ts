import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { docQueryString } from '../../constants';
import { request } from '../../requests/api';
import { Root } from 'types';
import { parseSchema } from '../../utils';

export const fetchDocSchema = createAsyncThunk<Root>('schema', async () => {
  const response = await request(docQueryString);
  return response;
});

type InitialStateType = {
  schema: { [key: string]: { title: string; fields: string[][] | undefined } } | null;
};

const initialState: InitialStateType = { schema: null };

const requestSlice = createSlice({
  name: 'schema',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchDocSchema.fulfilled, (state, action) => {
      state.schema = parseSchema(action.payload);
    });
  },
});

export default requestSlice.reducer;
