import ControlledEditor from '@monaco-editor/react';
import { useTypeSelector } from '../../../hooks/redux-hooks';

const ResultWindow = () => {
  const { result } = useTypeSelector((state) => state.requestValue);

  return (
    <>
      <div className='result-window-wrap rounded-xl flex justify-center pt-5 pl-2 pb-2 mb-1 sm:mr-1 w-[100%] bg-white sm:rounded-tl-none sm:rounded-bl-none'>
        <div className='w-[95%] h-[35vh] sm:h-[81.5vh]  mr-1 '>
          <ControlledEditor
            width='100%'
            theme='light'
            height='inherit'
            defaultLanguage='graphql'
            value={result}
            className='overflow-hidden'
            options={{
              readOnly: true,
              lineNumbers: 'off',
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
      </div>
    </>
  );
};

export default ResultWindow;
