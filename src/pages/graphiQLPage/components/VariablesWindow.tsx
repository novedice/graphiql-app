import { Editor } from '@monaco-editor/react';
import { useAppDispatch, useTypeSelector } from '../../../hooks/redux-hooks';
import { updateVariablesValue } from '../../../store/slices/variablesSlice';

const VaraiblesWindow = () => {
  const { variables } = useTypeSelector((state) => state.variablesValue);
  const dispatch = useAppDispatch();

  const handleVarChange = (valVar: string | undefined) => {
    dispatch(updateVariablesValue(valVar ? valVar : ''));
  };

  return (
    <>
      <div className='h-[20vh] sm:h-[25vh]'>
        <Editor
          height='inherit'
          width='90%'
          defaultLanguage='graphql'
          onChange={handleVarChange}
          value={variables}
          options={{
            minimap: { enabled: false },
            fontSize: 16,
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

export default VaraiblesWindow;
