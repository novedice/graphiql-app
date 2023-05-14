import { useAppDispatch, useTypeSelector } from '../hooks/redux-hooks';
import { FormattedMessage } from 'react-intl';
import HideSign from './hide-sign';
import { changeWholeView, closeVar, openVar } from '../store/slices/variableViewSlice';
import ShowSign from './show-sign';
import VaraiblesWindow from './VariablesWindow';
import HeadersWindow from './HeadersWindow';

const VariablesEditor = () => {
  const { wholeWindow, varWindow } = useTypeSelector((state) => state.variableView);
  const dispatch = useAppDispatch();

  const handleView = () => {
    dispatch(changeWholeView());
  };

  const openVariableWindow = () => {
    dispatch(openVar());
  };

  const openHeaderWindow = () => {
    dispatch(closeVar());
  };

  return (
    <>
      <div className='flex pt-2 pl-2 pb-2 w-[100%] flex-col bg-white rounded-bl-xl'>
        <div className='flex mb-2 justify-between ml-2 mr-2'>
          <div className='flex'>
            <h2
              onClick={openVariableWindow}
              className='text-l bg-slate-300 hover:bg-blue-300 hover:cursor-pointer text-white font-bold py-1 px-4 mr-2 rounded'
            >
              <FormattedMessage id='variables_title' />
            </h2>
            <h2
              onClick={openHeaderWindow}
              className='text-l uppercase bg-slate-300 hover:bg-blue-300 hover:cursor-pointer text-white font-bold py-1 px-4 rounded'
            >
              <FormattedMessage id='headers_title' />
            </h2>
          </div>
          <button className='self-center' onClick={handleView}>
            {wholeWindow ? <HideSign /> : <ShowSign />}
          </button>
        </div>
        {wholeWindow && varWindow && <VaraiblesWindow />}
        {wholeWindow && !varWindow && <HeadersWindow />}
      </div>
    </>
  );
};

export default VariablesEditor;
