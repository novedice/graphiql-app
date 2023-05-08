import { Editor } from '@monaco-editor/react';
import { useTypeSelector } from '../hooks/hooks';

const ResultWindow = () => {
  const { resultValue } = useTypeSelector((state) => state.resultValue);

  return (
    <>
      <Editor
        height='50vh'
        width='50vw'
        defaultLanguage='graphql'
        value={`${resultValue}`}
        options={{ readOnly: true, lineNumbers: 'off' }}
      />
    </>
  );
};

export default ResultWindow;
