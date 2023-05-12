import { Editor } from '@monaco-editor/react';
import { useTypeSelector } from '../hooks/redux-hooks';

const ResultWindow = () => {
  const { resultValue } = useTypeSelector((state) => state.resultValue);

  return (
    <>
      <div className='flex justify-between w-[100%] h-[100%] pr-3 pt-5 pl-2 pb-2 mb-1 mr-1 bg-white rounded-tr-xl rounded-br-xl'>
        <Editor
          height='82.5vh'
          className='overflow-hidden'
          width='100%'
          defaultLanguage='graphql'
          value={`${resultValue}`}
          options={{
            readOnly: true,
            lineNumbers: 'off',
            minimap: { enabled: false },
            scrollbar: {
              vertical: 'hidden',
              horizontal: 'hidden',
              handleMouseWheel: false,
            },
          }}
        />
      </div>
    </>
  );
};

export default ResultWindow;
