import Editor from '@monaco-editor/react';
import { useAppDispatch } from '../hooks/hooks';
import { FormattedMessage } from 'react-intl';
import { updateVariablesValue } from '../store/variablesSlice';

const VariablesEditor = () => {
  const dispatch = useAppDispatch();

  const handleChange = (val: string | undefined) => {
    dispatch(updateVariablesValue(val ? val : ''));
  };

  return (
    <>
      <div>
        <h2>
          <FormattedMessage id='variables_title' />
        </h2>
        <Editor height='30vh' defaultLanguage='graphql' onChange={handleChange} />
      </div>
    </>
  );
};

export default VariablesEditor;
