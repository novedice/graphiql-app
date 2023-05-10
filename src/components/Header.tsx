import { Link } from 'react-router-dom';
import ReactLogo from '../assets/logo.png';

import { useAuth } from '../hooks/use-auth';
import { useAppDispatch } from '../hooks/redux-hooks';

import { removeUser } from '../store/slices/userSlice';
import LanguageSelector from './Auth/LanguageSelector';
import { FormattedMessage } from 'react-intl';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Header = () => {
  const dispatch = useAppDispatch();
  const { isAuth, name } = useAuth();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0 && !isScrolled) {
        setIsScrolled(true);
      } else if (window.scrollY === 0 && isScrolled) {
        setIsScrolled(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  return (
    <motion.header
      className={`sticky top-0 z-50 bg-white shadow-md ${
        isScrolled ? 'bg-opacity-90 bg-sky-500/50' : 'bg-opacity-100'
      }`}
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      transition={{ type: 'tween', duration: 0.3, delay: 0 }}
    >
      <div
        className={`container max-w-full px-8 m-auto md:flex md:justify-between md:items-center ${
          isScrolled ? 'py-2' : 'py-6'
        }`}
      >
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
    </motion.header>
  );
};

export default Header;
