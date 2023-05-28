import ControlledEditor from '@monaco-editor/react';
import { useEffect, useState } from 'react';
import { useAppDispatch, useTypeSelector } from '../../../hooks/redux-hooks';
import { fetchResult, updateRequest } from '../../../store/slices/requestSlice';
import PlayIcon from './PlaySign';
import { openModalWindow } from '../../../store/slices/modalWindowSlice';

const RequestEditor = () => {
  const { status, request } = useTypeSelector((state) => state.requestValue);
  const [inputValue, setInputValue] = useState(
    request
      ? request
      : `query NewQuery {
          country(code:"PT") {
            name
          }
        }`
  );
  const dispatch = useAppDispatch();

  const { variables, headers } = useTypeSelector((state) => state.variablesValue);
  const { wholeWindow } = useTypeSelector((state) => state.variableView);

  const handleChange = (e: string | undefined) => {
    setInputValue(e ? e : '');
    dispatch(updateRequest(e ? e : ''));
  };

  const handleSubmit = async () => {
    let parsedVariables: object;
    let parsedHeaders: object;
    try {
      parsedVariables = JSON.parse(variables);
    } catch {
      parsedVariables = {};
    }
    try {
      parsedHeaders = JSON.parse(headers);
    } catch {
      parsedHeaders = {};
    }
    await dispatch(
      fetchResult({ query: inputValue, variables: parsedVariables, header: parsedHeaders })
    );
  };

  useEffect(() => {
    if (status === 'failed') {
      dispatch(openModalWindow());
    }
  }, [dispatch, status]);

  return (
    <>
      <div className='query-editor-wrap rounded-t-xl flex justify-center pt-5 pl-2 pb-2 mb-1 mr-1 w-[100%] bg-white sm:rounded-tr-none'>
        <div className={`h-[300px] ${wholeWindow ? 'sm:h-[50vh]' : 'sm:h-[75vh]'} w-[95%] mr-2`}>
          <ControlledEditor
            width='95%'
            theme='light'
            height='inherit'
            defaultLanguage='graphql'
            onChange={handleChange}
            defaultValue={inputValue}
            className='overflow-hidden text-2xl'
            options={{
              minimap: { enabled: false },
              overviewRulerLanes: 0,
              overviewRulerBorder: false,
              fontSize: 16,
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
