import { FormattedMessage } from 'react-intl';
import { useAppDispatch } from '../hooks/redux-hooks';
import { closeModalWindow } from '../store/slices/modalWindowSlice';

const ErrorWindow = () => {
  const dispatch = useAppDispatch();

  const handleOk = () => {
    dispatch(closeModalWindow());
  };

  return (
    <>
      <div className='fixed opacity-50 top-0 right-0 left-0 bottom-0 bg-black' onClick={handleOk} />
      <div className='flex w-full items-center left-0 top-1/3 fixed justify-center'>
        <div className='absolute flex flex-col items-center justify-around z-50 sm:top-1/3 rounded-lg p-4 sm:p-8 w-[300px] sm:w-auto bg-slate-300'>
          <FormattedMessage id='error_message' />
          <button
            onClick={handleOk}
            className='py-1 mb-2 mt-4 ml-0 capitalize block text-xl px-4 sm:mb:0 sm:py-2 text-gray-700 bg-red-400 hover:bg-red-500 rounded'
          >
            OK
          </button>
        </div>
      </div>
    </>
  );
};

export default ErrorWindow;
