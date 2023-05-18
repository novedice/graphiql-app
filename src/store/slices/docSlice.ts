import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { request } from '../../requests/api';
import { ArgType, SchemaItem } from 'types';
import { parseSchema } from '../../utils';
import { getIntrospectionQuery, IntrospectionQuery } from 'graphql';

export const fetchDocSchema = createAsyncThunk<{
  res: IntrospectionQuery;
  error: string | undefined;
}>('schema', async () => {
  const { result, error } = await request(getIntrospectionQuery());
  const res = result.data;

  return { res, error };
});

export type DocState = {
  type: string;
  args: ArgType | null;
  id: number;
};

type InitialStateType = {
  schema: SchemaItem[] | null;
  docList: DocState[];
};

const initialState: InitialStateType = {
  schema: null,
  docList: [{ type: 'Query', id: Date.now(), args: null }],
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
      const parsedSchema = parseSchema(action.payload.res) as SchemaItem[];
      state.schema = parsedSchema;
    });
  },
});

export const { updateDoc } = docSlice.actions;
export default docSlice.reducer;
