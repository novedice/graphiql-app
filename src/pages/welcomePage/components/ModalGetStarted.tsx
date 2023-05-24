import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

const ModalGetStarted = () => {
  return (
    <>
      <h2 className='mt-4 mb-8 text-2xl font-light'>
        <FormattedMessage id='startUsing' />
      </h2>
      <div className='flex items-center justify-center gap-4'>
        <h3 className='text-2xl font-thin'>
          <FormattedMessage id='haveAccount' />
        </h3>
        <Link
          to='/login'
          className='capitalize text-xl px-2 py-1 text-black mr-2 bg-yellow-200 hover:bg-yellow-300 rounded'
        >
          <FormattedMessage id='sign_in' />
        </Link>
      </div>
      <div className='mt-8 flex items-center justify-center gap-2'>
        <h3 className='text-2xl font-thin'>
          <FormattedMessage id='dontHaveAccount' />
        </h3>
        <Link
          to='/register'
          className='capitalize text-xl bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded'
        >
          <FormattedMessage id='sign_up' />
        </Link>
      </div>

      <div className='absolute top-0 right-0 p-2'>
        <button
          className='text-gray-500 hover:text-gray-700 p-0'
          // onClick={handleModalClose}
        >
          <svg className='w-8 h-8 fill-current' viewBox='0 0 20 20'>
            <path
              fillRule='evenodd'
              d='M13.414 6.586a2 2 0 00-2.828 0L10 7.172l-.586-.586a2 2 0 00-2.828 2.828L7.172 10l-.586.586a2 2 0 002.828 2.828L10 12.828l.586.586a2 2 0 002.828-2.828L12.828 10l.586-.586a2 2 0 000-2.828z'
              clipRule='evenodd'
            ></path>
          </svg>
        </button>
      </div>
    </>
  );
};

export default ModalGetStarted;
