import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { request } from '../../requests/api';
import { ArgType, SchemaItem } from 'types';
import { parseSchema } from '../../utils';
import { getIntrospectionQuery, IntrospectionQuery } from 'graphql';

export const fetchDocSchema = createAsyncThunk<{
  result: { data: IntrospectionQuery } | undefined;
  error: string | undefined;
}>('schema', async () => {
  const { result, error } = await request(getIntrospectionQuery());
  return { result, error };
});

export type DocState = {
  type: string;
  args: ArgType | null;
  id: number;
};

type InitialStateType = {
  schema: SchemaItem[] | null;
  docList: DocState[];
  docError: string | undefined;
};

const initialState: InitialStateType = {
  schema: null,
  docList: [{ type: 'Query', id: Date.now(), args: null }],
  docError: '',
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
        { type: type.replace('[', '').replace(']', ''), id: Date.now(), args },
      ];
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchDocSchema.fulfilled, (state, action) => {
      if (action.payload.result) {
        const parsedSchema = parseSchema(action.payload.result?.data) as SchemaItem[];
        state.schema = parsedSchema;
      }
      state.docError = action.payload.error;
    });
  },
});

export const { updateDoc } = docSlice.actions;
export default docSlice.reducer;
