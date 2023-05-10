import ControlledEditor from '@monaco-editor/react';
import { useState } from 'react';
import { useAppDispatch, useTypeSelector } from '../hooks/hooks';
import { addRequest } from '../store/requestSlice';
import { request } from '../requests/api';
import { addResults } from '../store/resultSlice';
import PlayIcon from './play-sign';

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
      <div className='flex justify-center pt-5 pl-2 pb-2 mb-1 mr-1 w-[100%] bg-white rounded-tl-xl'>
        <div className='w-[80%]'>
          <ControlledEditor
            width='100%'
            theme='light'
            height='50vh'
            defaultLanguage='graphql'
            onChange={handleChange}
            defaultValue={inputValue}
            options={{ minimap: { enabled: false } }}
          />
        </div>
        <div className='flex justify-center w-[20%]'>
          <div
            className='bg-slate-300 flex min-w-[50px] max-h-[40px] hover:bg-red-400 rounded-lg'
            onClick={handleSubmit}
          >
            <PlayIcon />
            <p>Query</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestEditor;
