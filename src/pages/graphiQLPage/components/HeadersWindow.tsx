import { Editor } from '@monaco-editor/react';
import { useAppDispatch, useTypeSelector } from '../../../hooks/redux-hooks';
import { updateHeadersValue } from '../../../store/slices/variablesSlice';

const HeadersWindow = () => {
  const { headers } = useTypeSelector((state) => state.variablesValue);
  const dispatch = useAppDispatch();

  const handleHeadChange = (valHead: string | undefined) => {
    dispatch(updateHeadersValue(valHead ? valHead : ''));
  };

  return (
    <>
      <div className='h-[20vh] sm:h-[25vh]'>
        <Editor
          height='inherit'
          width='90%'
          defaultLanguage='graphql'
          onChange={handleHeadChange}
          value={headers}
          options={{
            minimap: { enabled: false },
            scrollbar: {
              vertical: 'hidden',
              horizontal: 'hidden',
            },
          }}
        />
      </div>
    </>
  );
};

export default HeadersWindow;
