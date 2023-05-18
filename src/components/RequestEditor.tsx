import ControlledEditor from '@monaco-editor/react';
import { useState } from 'react';
import { useAppDispatch, useTypeSelector } from '../hooks/redux-hooks';
import { addRequest } from '../store/slices/requestSlice';
import { request } from '../requests/api';
import { addResults } from '../store/slices/resultSlice';
import PlayIcon from './play-sign';

const RequestEditor = () => {
  const [inputValue, setInputValue] = useState(`query NewQuery {
          country(code:"PT") {
            name
          }
        }`);
  const dispatch = useAppDispatch();

  const { variables } = useTypeSelector((state) => state.variablesValue);
  const { wholeWindow } = useTypeSelector((state) => state.variableView);
  // const { result, error } = useResults();

  const handleChange = (e: string | undefined) => {
    setInputValue(e ? e : '');
  };

  const handleSubmit = async () => {
    dispatch(addRequest(inputValue));
    try {
      JSON.parse(variables);
      const { result, error } = await request(inputValue, variables);
      if (result) {
        dispatch(addResults(JSON.stringify(result, null, 2)));
      }
      if (error) {
        alert(`this is error: ${error}`);
      }
    } catch (e) {
      const { result, error } = await request(inputValue);
      if (result) {
        dispatch(addResults(JSON.stringify(result, null, 2)));
      }
      if (error) {
        alert(`this is error: ${error}`);
      }
    }
  };

  return (
    <>
      <div className='query-editor-wrap rounded-t-xl flex justify-center pt-5 pl-2 pb-2 mb-1 mr-1 w-[100%] bg-white sm:rounded-tr-none'>
        <div className={`h-[300px] ${wholeWindow ? 'sm:h-[50vh]' : 'sm:h-[75vh]'} w-[95%] mr-2`}>
          <ControlledEditor
            width='100%'
            theme='light'
            height='inherit'
            defaultLanguage='graphql'
            onChange={handleChange}
            defaultValue={inputValue}
            className='overflow-hidden'
            options={{
              minimap: { enabled: false },
              overviewRulerLanes: 0,
              overviewRulerBorder: false,
              scrollbar: {
                vertical: 'hidden',
                horizontal: 'hidden',
              },
            }}
          />
        </div>
        <div className='flex justify-center w-[45px] mr-2'>
          <button
            className='bg-slate-300 flex min-w-[40px] max-h-[40px] justify-center items-center hover:bg-red-400 rounded-lg'
            onClick={handleSubmit}
          >
            <PlayIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default RequestEditor;
