import { FormattedMessage } from 'react-intl';
import { useAppDispatch } from '../../../hooks/redux-hooks';
import { closeModalWindow } from '../../../store/slices/modalWindowSlice';
import { updateStatusRequest } from '../../../store/slices/requestSlice';
import { updateStatusDoc } from '../../../store/slices/docSlice';

const ErrorWindow = () => {
  const dispatch = useAppDispatch();

  const handleOk = () => {
    dispatch(closeModalWindow());
    dispatch(updateStatusRequest());
    dispatch(updateStatusDoc());
  };

  return (
    <>
      <div className='flex flex-col items-center'>
        <FormattedMessage id='error_message' />
        <button
          onClick={handleOk}
          className='py-1 mb-2 mt-4 ml-0 capitalize block text-xl px-4 sm:mb:0 sm:py-2 text-gray-700 bg-red-400 hover:bg-red-500 rounded'
        >
          OK
        </button>
      </div>
    </>
  );
};

export default ErrorWindow;
