import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { request } from '../../requests/api';
import { ArgType, SchemaItem } from 'types';
import { parseSchema } from '../../utils';
import { getIntrospectionQuery, IntrospectionQuery } from 'graphql';

export const fetchDocSchema = createAsyncThunk<IntrospectionQuery>('schema', async () => {
  const response = await request({ query: getIntrospectionQuery() });
  return response.data;
});

export type DocState = {
  type: string;
  args: ArgType | null;
  id: number;
};

type InitialStateType = {
  schema: SchemaItem[] | null;
  docList: DocState[];
  status: 'idle' | 'pending' | 'succeeded' | 'failed';
};

const initialState: InitialStateType = {
  schema: null,
  docList: [{ type: 'Query', id: Date.now(), args: null }],
  status: 'idle',
};

const docSlice = createSlice({
  name: 'schema',
  initialState,
  reducers: {
    updateDoc: (state, action) => {
      const type = action.payload.type as string;
      const order = action.payload.order as number;
      const args = action.payload.args;

      state.docList = [
        ...state.docList.slice(0, order + 1),
        { type: type.replace(/\]|\[|!|\$/g, ''), id: Date.now(), args },
      ];
    },
    updateStatusDoc: (state) => {
      state.status = 'idle';
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchDocSchema.fulfilled, (state, action) => {
      const parsedSchema = parseSchema(action.payload) as SchemaItem[];
      state.schema = parsedSchema;
      state.status = 'succeeded';
    });
    builder.addCase(fetchDocSchema.rejected, (state) => {
      state.status = 'failed';
    });
    builder.addCase(fetchDocSchema.pending, (state) => {
      state.status = 'pending';
    });
  },
});

export const { updateDoc, updateStatusDoc } = docSlice.actions;
export default docSlice.reducer;
