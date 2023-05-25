import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import SignBack from './components/SignBack';

const Page404 = () => {
  return (
    <>
      <div className={`w-full h-[70vh] flex items-center justify-center bg-welcomePage `}>
        <div className='flex flex-col text-[30px] text-rose-500 items-center justify-center text-center '>
          <p className='text-white text-[150px]'>404</p>
          <div>
            <FormattedMessage id='page_not_found' />
          </div>
          <FormattedMessage id='do_not_worry' />
          <div className='mb-8'>
            <FormattedMessage id='back_to_journey' />
          </div>
          <Link
            to='/'
            className='w-[280px] flex items-center justify-around capitalize text-3xl px-4 py-2 text-white border-[1px] font-sans border-white rounded font-thin hover:text-black hover:bg-white'
          >
            <SignBack />
            <FormattedMessage id='go_to_home' />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Page404;
