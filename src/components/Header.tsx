import { Link } from 'react-router-dom';
import ReactLogo from '../assets/logo.png';

import { useAuth } from '../hooks/use-auth';
import { useAppDispatch } from '../hooks/redux-hooks';

import { removeUser } from '../store/slices/userSlice';
import LanguageSelector from './Auth/LanguageSelector';

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
          {isAuth ? <h1 className='text-2xl ml-6 font-bold'>Welcome, {name}</h1> : <></>}
        </div>
        <nav className='hidden md:flex md:items-center'>
          <ul className='md:flex md:items-center'>
            <li>
              <Link
                to='/'
                className='block text-xl px-4 py-2 text-gray-700 hover:bg-gray-100 rounded'
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/about'
                className='block text-xl px-4 py-2 text-gray-700 hover:bg-gray-100 rounded'
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to='/contact'
                className=' block text-xl px-4 py-2 text-gray-700 hover:bg-gray-100 rounded'
              >
                Contact
              </Link>
            </li>
          </ul>

          {isAuth ? (
            <Link
              to='/login'
              className='block text-xl px-4 py-2 text-gray-700  ml-10 bg-red-400 hover:bg-red-500 rounded'
              onClick={() => dispatch(removeUser())}
            >
              Log out
            </Link>
          ) : (
            <div className='ml-4 flex items-center'>
              <Link
                to='/login'
                className='block text-xl px-4 py-2 text-gray-700  mr-2 bg-yellow-300 hover:bg-yellow-400 rounded'
              >
                Sign In
              </Link>
              <Link
                to='/register'
                className='text-xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
              >
                Sign Up
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
