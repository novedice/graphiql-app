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
        <div className='w-[95%] mr-2'>
          <ControlledEditor
            width='100%'
            theme='light'
            height={wholeWindow ? '50vh' : '75vh'}
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
