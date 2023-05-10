import Editor from '@monaco-editor/react';
import { useAppDispatch } from '../hooks/hooks';
import { updateVariablesValue } from '../store/variablesSlice';
import { FormattedMessage } from 'react-intl';

const VariablesEditor = () => {
  const dispatch = useAppDispatch();

  const handleChange = (val: string | undefined) => {
    dispatch(updateVariablesValue(val ? val : ''));
  };

  return (
    <>
      <div className='flex pt-5 pl-2 pb-2 w-[100%] flex-col bg-white rounded-bl-xl'>
        <div className='flex'>
          <h2 className='bg-slate-300 flex min-w-[50px] max-h-[40px] hover:bg-red-400 rounded-lg'>
            <FormattedMessage id='variables_title' />
          </h2>
          <h2 className='bg-slate-300 flex min-w-[50px] max-h-[40px] hover:bg-red-400 rounded-lg'>
            <FormattedMessage id='headers_title' />
          </h2>
        </div>
        <Editor
          height='25vh'
          width='80%'
          defaultLanguage='graphql'
          onChange={handleChange}
          options={{ minimap: { enabled: false } }}
        />
      </div>
    </>
  );
};

export default VariablesEditor;
