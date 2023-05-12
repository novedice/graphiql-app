import Editor from '@monaco-editor/react';
import { useAppDispatch, useTypeSelector } from '../hooks/redux-hooks';
import { updateHeadersValue, updateVariablesValue } from '../store/slices/variablesSlice';
import { FormattedMessage } from 'react-intl';
import HideSign from './hide-sign';
import { changeWholeView, closeVar, openVar } from '../store/slices/variableViewSlice';
import ShowSign from './show-sign';

const VariablesEditor = () => {
  const { wholeWindow, varWindow } = useTypeSelector((state) => state.variableView);
  const { variables, headers } = useTypeSelector((state) => state.variablesValue);
  const dispatch = useAppDispatch();

  const handleVarChange = (val: string | undefined) => {
    dispatch(updateVariablesValue(val ? val : ''));
  };

  const handleHeadChange = (val: string | undefined) => {
    dispatch(updateHeadersValue(val ? val : ''));

    console.log(val);
  };

  const handleView = () => {
    dispatch(changeWholeView());
  };

  return (
    <>
      <div className='flex pt-2 pl-2 pb-2 w-[100%] flex-col bg-white rounded-bl-xl'>
        <div className='flex mb-2 justify-between ml-2 mr-2'>
          <div className='flex' onClick={() => dispatch(openVar())}>
            <h2 className='text-l bg-slate-300 hover:bg-blue-300 text-white font-bold py-1 px-4 mr-2 rounded'>
              <FormattedMessage id='variables_title' />
            </h2>
            <h2
              onClick={() => dispatch(closeVar())}
              className='text-l bg-slate-300 hover:bg-blue-300 text-white font-bold py-1 px-4 rounded'
            >
              <FormattedMessage id='headers_title' />
            </h2>
          </div>
          <button className='self-center' onClick={handleView}>
            {wholeWindow ? <HideSign /> : <ShowSign />}
          </button>
        </div>
        {wholeWindow &&
          (varWindow ? (
            <Editor
              height='25vh'
              width='80%'
              defaultLanguage='graphql'
              onChange={handleVarChange}
              value={variables}
              options={{
                minimap: { enabled: false },
                scrollbar: {
                  vertical: 'hidden',
                  horizontal: 'hidden',
                  handleMouseWheel: false,
                },
              }}
            />
          ) : (
            <Editor
              height='25vh'
              width='80%'
              defaultLanguage='graphql'
              onChange={handleHeadChange}
              value={headers}
              options={{
                minimap: { enabled: false },
                scrollbar: {
                  vertical: 'hidden',
                  horizontal: 'hidden',
                  handleMouseWheel: false,
                },
              }}
            />
          ))}
      </div>
    </>
  );
};

export default VariablesEditor;
