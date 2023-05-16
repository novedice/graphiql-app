import { Transition } from '@headlessui/react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ModalWindow: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const handleModalClose = () => {
    onClose();
  };
  return (
    <>
      <Transition
        show={isOpen}
        enter='transition-opacity duration-300'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='transition-opacity duration-300'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
        className='fixed inset-0 z-50 bg-black bg-opacity-50'
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            onClose();
          }
        }}
      >
        <div
          className={`w-auto fixed z-50 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-slate-800 rounded-lg p-8`}
        >
          <h2 className='mt-4 mb-8 text-2xl font-light'>
            To start using the system, you need to be authorized
          </h2>
          <div className='flex items-center justify-center gap-4'>
            <h3 className='text-2xl font-thin'>You have an account:</h3>
            <Link
              to='/login'
              className='capitalize text-xl px-2 py-1 text-black mr-2 bg-yellow-200 hover:bg-yellow-300 rounded'
            >
              <FormattedMessage id='sign_in' />
            </Link>
          </div>
          <div className='mt-8 flex items-center justify-center gap-2'>
            <h3 className='text-2xl font-thin'>Don&prime;t have an account?</h3>
            <Link
              to='/register'
              className='capitalize text-xl bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded'
            >
              <FormattedMessage id='sign_up' />
            </Link>
          </div>

          <div className='absolute top-0 right-0 p-2'>
            <button className='text-gray-500 hover:text-gray-700 p-0' onClick={handleModalClose}>
              <svg className='w-8 h-8 fill-current' viewBox='0 0 20 20'>
                <path
                  fillRule='evenodd'
                  d='M13.414 6.586a2 2 0 00-2.828 0L10 7.172l-.586-.586a2 2 0 00-2.828 2.828L7.172 10l-.586.586a2 2 0 002.828 2.828L10 12.828l.586.586a2 2 0 002.828-2.828L12.828 10l.586-.586a2 2 0 000-2.828z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </Transition>
    </>
  );
};

export default ModalWindow;
