import { Editor } from '@monaco-editor/react';
import { useTypeSelector } from '../hooks/hooks';

const ResultWindow = () => {
  const { resultValue } = useTypeSelector((state) => state.resultValue);

  return (
    <>
      <div className='flex justify-between w-[100%] h-[100%] pt-5 pl-2 pb-2 mb-1 mr-1 bg-white rounded-tr-xl rounded-br-xl'>
        <Editor
          height='82.5vh'
          width='100%'
          defaultLanguage='graphql'
          value={`${resultValue}`}
          options={{ readOnly: true, lineNumbers: 'off', minimap: { enabled: false } }}
        />
      </div>
    </>
  );
};

export default ResultWindow;
