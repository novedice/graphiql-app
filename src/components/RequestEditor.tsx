import Editor from '@monaco-editor/react';
import { useState } from 'react';
import { useAppDispatch, useTypeSelector } from '../hooks/hooks';
import { addRequest } from '../store/requestSlice';
import { request } from '../requests/api';
import { addResults } from '../store/resultSlice';

const RequestEditor = () => {
  const [inputValue, setInputValue] = useState(`query NewQuery {
          country(code:"PT") {
            name
          }
        }`);
  const dispatch = useAppDispatch();

  const { variables } = useTypeSelector((state) => state.variablesValue);

  const handleChange = (e: string | undefined) => {
    setInputValue(e ? e : '');
  };

  const handleSubmit = async () => {
    dispatch(addRequest(inputValue));
    try {
      JSON.parse(variables);
      const res = await request(inputValue, variables);
      if (res) {
        dispatch(addResults(JSON.stringify(res, null, 2)));
      }
    } catch (e) {
      const res = await request(inputValue);
      if (res) {
        dispatch(addResults(JSON.stringify(res, null, 2)));
      }
    }
  };

  return (
    <>
      <div className='flex flex-col w-[100%]'>
        <Editor
          height='50vh'
          defaultLanguage='graphql'
          onChange={handleChange}
          defaultValue={inputValue}
        />
        <button className='bg-black w-[300px] h-[40px]' onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
};

export default RequestEditor;
