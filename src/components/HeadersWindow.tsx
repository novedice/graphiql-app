import { Editor } from '@monaco-editor/react';
import { useAppDispatch, useTypeSelector } from '../hooks/redux-hooks';
import { updateHeadersValue } from '../store/slices/variablesSlice';

const HeadersWindow = () => {
  const { headers } = useTypeSelector((state) => state.variablesValue);
  const dispatch = useAppDispatch();

  const handleHeadChange = (valHead: string | undefined) => {
    dispatch(updateHeadersValue(valHead ? valHead : ''));
  };

  return (
    <>
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
    </>
  );
};

export default HeadersWindow;
