import { Editor } from '@monaco-editor/react';
import { useAppDispatch, useTypeSelector } from '../hooks/redux-hooks';
import { updateVariablesValue } from '../store/slices/variablesSlice';

const VaraiblesWindow = () => {
  const { variables } = useTypeSelector((state) => state.variablesValue);
  const dispatch = useAppDispatch();

  const handleVarChange = (valVar: string | undefined) => {
    dispatch(updateVariablesValue(valVar ? valVar : ''));
  };

  return (
    <>
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
    </>
  );
};

export default VaraiblesWindow;
