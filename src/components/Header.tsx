import { Link } from 'react-router-dom';
import ReactLogo from '../assets/logo.png';

import { useAuth } from '../hooks/use-auth';
import { useAppDispatch } from '../hooks/redux-hooks';

import { removeUser } from '../store/slices/userSlice';
import LanguageSelector from './Auth/LanguageSelector';
import { FormattedMessage } from 'react-intl';

const Header = () => {
  const dispatch = useAppDispatch();
  const { isAuth, name } = useAuth();

  return (
    <header className='shadow-md sticky top-0 z-100'>
      <div className='container max-w-full py-6 px-8 m-auto md:flex md:justify-between md:items-center'>
        <div className='flex items-center justify-between'>
          <Link to='/'>
            <img className='w-12' src={ReactLogo} alt='React Logo' />
          </Link>
          {isAuth ? (
            <h1 className='capitalize text-2xl ml-6 font-bold'>
              <FormattedMessage id='welcome' />, {name}
            </h1>
          ) : (
            <></>
          )}
        </div>
        <nav className='hidden md:flex md:items-center'>
          <ul className='md:flex md:items-center'>
            <li>
              <Link
                to='/'
                className='first-letter:uppercase block text-xl px-4 py-2 text-gray-700 hover:bg-gray-100 rounded'
              >
                <FormattedMessage id='home' />
              </Link>
            </li>
            <li>
              <Link
                to='/about'
                className='capitalize block text-xl px-4 py-2 text-gray-700 hover:bg-gray-100 rounded'
              >
                <FormattedMessage id='about' />
              </Link>
            </li>
            <li>
              <Link
                to='/contact'
                className='capitalize block text-xl px-4 py-2 text-gray-700 hover:bg-gray-100 rounded'
              >
                <FormattedMessage id='contact' />
              </Link>
            </li>
          </ul>

          {isAuth ? (
            <Link
              to='/login'
              className='capitalize block text-xl px-4 py-2 text-gray-700  ml-10 bg-red-400 hover:bg-red-500 rounded'
              onClick={() => dispatch(removeUser())}
            >
              <FormattedMessage id='log_out' />
            </Link>
          ) : (
            <div className='ml-4 flex items-center'>
              <Link
                to='/login'
                className='capitalize block text-xl px-4 py-2 text-gray-700  mr-2 bg-yellow-300 hover:bg-yellow-400 rounded'
              >
                <FormattedMessage id='sign_in' />
              </Link>
              <Link
                to='/register'
                className='capitalize text-xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
              >
                <FormattedMessage id='sign_up' />
              </Link>
            </div>
          )}
          <LanguageSelector />
        </nav>
      </div>
    </header>
  );
};

export default Header;
