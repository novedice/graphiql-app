import { useAppDispatch, useTypeSelector } from '../../../hooks/redux-hooks';
import { FormattedMessage } from 'react-intl';
import {
  changeWholeView,
  closeVar,
  openVar,
  openWholeView,
} from '../../../store/slices/variableViewSlice';
import { HideSign, ShowSign, VaraiblesWindow, HeadersWindow } from './';

const VariablesEditor = () => {
  const { wholeWindow, varWindow } = useTypeSelector((state) => state.variableView);
  const dispatch = useAppDispatch();

  const handleView = () => {
    dispatch(changeWholeView());
  };

  const openVariableWindow = () => {
    dispatch(openVar());
    dispatch(openWholeView());
  };

  const openHeaderWindow = () => {
    dispatch(closeVar());
    dispatch(openWholeView());
  };

  return (
    <>
      <div className='rounded-b-xl flex pt-2 pl-2 pb-2 w-[100%] flex-col bg-white sm:rounded-br-none'>
        <div className='flex mb-2 justify-between h-[4vh] ml-2 mr-2'>
          <div className='flex'>
            <h2
              onClick={openVariableWindow}
              className={`text-sm md:text-lg uppercase ${
                varWindow && wholeWindow ? 'bg-gray-200' : ''
              } hover:bg-blue-300 flex items-center hover:cursor-pointer py-1 px-4 mr-2 rounded`}
            >
              <FormattedMessage id='variables_title' />
            </h2>
            <h2
              onClick={openHeaderWindow}
              className={`text-sm md:text-lg uppercase ${
                !varWindow && wholeWindow ? 'bg-gray-200' : ''
              } hover:bg-blue-300 flex items-center hover:cursor-pointer py-1 px-4 rounded`}
            >
              <FormattedMessage id='headers_title' />
            </h2>
          </div>
          <button className='self-center hidden sm:block' onClick={handleView}>
            {wholeWindow ? <HideSign /> : <ShowSign />}
          </button>
          <button className='self-center sm:hidden block' onClick={handleView}>
            {!wholeWindow ? <HideSign /> : <ShowSign />}
          </button>
        </div>
        {wholeWindow && varWindow && <VaraiblesWindow />}
        {wholeWindow && !varWindow && <HeadersWindow />}
      </div>
    </>
  );
};

export default VariablesEditor;
